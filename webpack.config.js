const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "out"),
    publicPath: "/public/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
};
