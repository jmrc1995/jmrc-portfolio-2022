/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withImages = require("next-images");
module.exports = withImages();

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig

