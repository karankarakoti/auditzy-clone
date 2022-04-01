const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "www.google.com"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
