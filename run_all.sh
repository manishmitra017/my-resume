#!/bin/bash

# Portfolio Project Runner
# This script sets up and runs the portfolio website locally

set -e  # Exit on error

echo "🚀 Starting Manish Mitra Portfolio..."
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed!"
    echo "📦 Installing pnpm..."
    npm install -g pnpm
    echo "✅ pnpm installed successfully!"
    echo ""
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies with pnpm..."
    pnpm install
    echo "✅ Dependencies installed!"
    echo ""
else
    echo "✅ Dependencies already installed"
    echo ""
fi

# Display available commands
echo "📋 Available commands:"
echo "  • pnpm dev     - Start development server"
echo "  • pnpm build   - Build for production"
echo "  • pnpm start   - Start production server"
echo ""

# Kill any process running on port 3000
echo "🔍 Checking for processes on port 3000..."
PORT_PID=$(lsof -ti:3000 || true)
if [ ! -z "$PORT_PID" ]; then
    echo "🛑 Killing process(es) on port 3000: $PORT_PID"
    kill -9 $PORT_PID
    sleep 1
    echo "✅ Port 3000 is now free"
else
    echo "✅ Port 3000 is already free"
fi
echo ""

# Start development server
echo "🎨 Starting development server..."
echo "🌐 Opening http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

pnpm dev
