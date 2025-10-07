#!/bin/bash

# Package Next.js standalone build for AWS Lambda deployment
# Based on clean deployment pattern (no custom resources)

set -e

echo "🔨 Building Next.js application in standalone mode..."
pnpm run build

echo "📦 Packaging Lambda function..."

# Clean up previous Lambda package
rm -rf .next-lambda
mkdir -p .next-lambda

# Copy standalone server files
echo "  → Copying standalone server..."
cp -r .next/standalone/. .next-lambda/

# Copy static files to Lambda (needed for SSR)
echo "  → Copying static assets to Lambda..."
mkdir -p .next-lambda/.next/static
cp -r .next/static/. .next-lambda/.next/static/

# Copy public files to Lambda
echo "  → Copying public assets to Lambda..."
if [ -d "public" ]; then
  cp -r public .next-lambda/
fi

# Create Lambda handler wrapper
echo "  → Creating Lambda handler..."
cat > .next-lambda/index.js << 'EOF'
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Initialize Next.js app
const app = next({
  dev: false,
  conf: require('./next.config.js'),
  dir: __dirname,
});

const handle = app.getRequestHandler();

let server;

// Initialize server
async function startServer() {
  if (server) return;

  await app.prepare();

  server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  return server;
}

// Lambda handler
exports.handler = async (event, context) => {
  try {
    // Ensure server is started
    await startServer();

    // Convert Lambda event to HTTP request
    const { rawPath = '/', headers = {}, body, isBase64Encoded = false } = event;
    const method = event.requestContext?.http?.method || 'GET';

    // Create a mock request/response
    return new Promise((resolve, reject) => {
      const reqUrl = `http://localhost${rawPath}`;

      // Make internal request
      const req = {
        url: rawPath,
        method: method,
        headers: headers,
      };

      const chunks = [];
      const res = {
        statusCode: 200,
        headers: {},
        setHeader: function(key, value) {
          this.headers[key] = value;
        },
        getHeader: function(key) {
          return this.headers[key];
        },
        writeHead: function(statusCode, headers) {
          this.statusCode = statusCode;
          if (headers) {
            this.headers = { ...this.headers, ...headers };
          }
        },
        write: function(chunk) {
          chunks.push(Buffer.from(chunk));
        },
        end: function(chunk) {
          if (chunk) {
            chunks.push(Buffer.from(chunk));
          }

          const body = Buffer.concat(chunks).toString('utf-8');

          resolve({
            statusCode: this.statusCode,
            headers: this.headers,
            body: body,
            isBase64Encoded: false,
          });
        },
      };

      // Handle the request
      handle(req, res, parse(rawPath, true)).catch(reject);
    });
  } catch (error) {
    console.error('Lambda error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Internal Server Error',
    };
  }
};
EOF

echo "✅ Lambda package ready in .next-lambda/"
echo "📊 Package size:"
du -sh .next-lambda
