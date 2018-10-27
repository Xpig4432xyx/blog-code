const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    proxy:{'/api': {
        target: "https://columbus.iboohee.cn",
        changeOrigin: true,
        secure: false
      }}
  }
};
