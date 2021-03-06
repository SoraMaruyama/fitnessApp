const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack/hot/only-dev-server",
    `${path.resolve(__dirname, "src")}/index.jsx`
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader"
      }
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     "file?hash=sha512&digest=hex&name=[hash].[ext]",
      //     "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
      //   ]
      // }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist"
  },
  plugins: [new OpenBrowserPlugin({ url: "http://localhost:8080" })],
  resolve: {
    extensions: [".webpack.js", ".js", ".jsx"]
  }
};
