const path = require('path');

module.exports = {
  // your other Webpack config options here
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "fs": false
    }
  }
};
