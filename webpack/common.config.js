// webpack plugins
const SplitChunksPlugin = require("webpack/lib/optimize/SplitChunksPlugin");
var webpack = require("webpack");

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
    new webpack.EnvironmentPlugin({
      IMAGES_API_URL: "https://image-so-sweet-api.herokuapp.com/images",
      EMAIL_FORM_API_URL:
        "https://image-so-sweet-form-api.herokuapp.com/email-form",
      LOW_RES_IMAGES_API_URL:
        "https://image-so-sweet-api.herokuapp.com/low-res-images",
      DEBUG: false
    })
  ]
};
