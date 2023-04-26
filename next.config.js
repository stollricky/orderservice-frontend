const webpack = require('webpack')

module.exports = {
  webpack: (config, { isServer }) => {
    // Exclude fs module from being bundled
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

