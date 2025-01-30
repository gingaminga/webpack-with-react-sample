const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");
const common = require("./webpack.common.js");

module.exports = (_env, argv) => {
  const { mode } = argv;

  return merge(common, {
    target: "web",
    entry: "./src/renderer",
    output: {
      path: path.resolve(__dirname, "build/renderer"),
      filename: "renderer.js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new DotenvPlugin({
        path: mode === "development" ? ".env.development" : ".env",
      }),
    ],
    devServer: {
      port: 3000,
      hot: true,
      devMiddleware: {
        writeToDisk: true,
      },
    },
  });
};
