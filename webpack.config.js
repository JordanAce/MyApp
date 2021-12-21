const path = require("path");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
