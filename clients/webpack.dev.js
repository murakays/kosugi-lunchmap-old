const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true
  }
});
