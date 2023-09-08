const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
  },
};