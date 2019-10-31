var path = require("path");
var webpack = require("webpack");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    port: 8899,
    proxy: {
      "/apis": {
        target: "https://cnodejs.org",
        changeOrigin: true,
        pathRewrite: {
          "^/apis": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~@/assets/css/index.scss";	
       `
      }
    }
  }
};
