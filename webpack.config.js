const path = require('path');

module.exports = {
  // your other Webpack config options here

  module: {
    rules:[
      {test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'saas-loader',
          'postcss-loader'
      ]}
    ]
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "url": require.resolve('url/'),
      "http": require.resolve('stream-http'),
      "https": require.resolve('https-browserify'),
      "fs": false
    }
  }
};

