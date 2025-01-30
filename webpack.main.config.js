const path = require("path");
const { merge } = require("webpack-merge");
const DotenvPlugin = require("dotenv-webpack");
const common = require("./webpack.common.js");

module.exports = (_env, argv) => {
  const { mode } = argv;

  return merge(common, {
    target: "electron-main",
    entry: "./src/main",
    output: {
      path: path.resolve(__dirname, "build/main"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new DotenvPlugin({
        path: mode === "development" ? ".env.development" : ".env",
      }),
    ],
    devServer: {
      port: 4000,
      hot: true,
      devMiddleware: {
        writeToDisk: true,
      },
    },
  });
};
