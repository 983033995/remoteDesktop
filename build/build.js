const webpack = require("webpack");
const path = require("path");
const servePaths = require("./servePath");
const resolve = (src) => path.resolve(__dirname, src);
const env = process.env.npm_lifecycle_event;
const servePath = servePaths[env];
console.log("servePath", servePath);
const alias = {
  "@img": resolve("../src/assets/image"),
  "@components": resolve("../src/components"),
  "@assets": resolve("../src/assets/")
};
const plugins = [
  new webpack.DefinePlugin({
    BASE_URL: JSON.stringify(servePath)
  }),
  new webpack.ProvidePlugin({
    API: [resolve("../src/request/index.js"), "default"]
  }),
  new webpack.NormalModuleReplacementPlugin(/(.*)-FILE_NAME(\.*)/, function(
    res
  ) {
    res.request = res.request.replace(/-FILE_NAME/, "store");
  })
];
module.exports = {
  webpack,
  path,
  servePath,
  alias,
  plugins
};
