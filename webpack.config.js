const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //추가
const HtmlWebpackPlugin = require("html-webpack-plugin"); //추가

module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      types: path.resolve(__dirname, "src/types"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 웹팩 실행시마다 dist 폴더 정리
    new HtmlWebpackPlugin({
      //index.html 자동 생성되도록 template 옵션 설정
      template: "./src/index.html",
    }),
  ],
};
