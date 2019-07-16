// webpack plugins
var webpack = require("webpack");
const SplitChunksPlugin = require("webpack/lib/optimize/SplitChunksPlugin");

module.exports = {
  entry: {
    app: ["./src/bootstrap.js"],
    vendor: "./src/vendor.js"
  },

  node: {
    fs: "empty"
  },

  resolve: {
    extensions: [".js", ".scss"],

    modules: ["node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },

      {
        type: "javascript/auto",
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: "/"
        }
      },

      {
        test: /\.(mp4|webm)$/,
        loader: "url?limit=10000"
      }
    ]
  },

  plugins: [
    new SplitChunksPlugin({
      name: ["app", "vendor"],
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
