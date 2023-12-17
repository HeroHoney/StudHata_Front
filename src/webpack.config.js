const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // ...other configurations
  plugins: [
    // ...other plugins
    new GenerateSW({
      swDest: 'service-worker.js',
      // other configuration options
    }),
  ],
};