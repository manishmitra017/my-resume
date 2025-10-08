/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for S3 hosting
  images: {
    unoptimized: true,
  },
  trailingSlash: true,  // Better for S3 static hosting
};

module.exports = nextConfig;
