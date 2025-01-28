// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = (_env, argv) => {
  const { mode } = argv;

  return {
    entry: {
      bundle: "./src",
    },
    output: {
      clean: true,
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
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
      port: 9000,
      hot: true,
      open: true,
    },
  };
};
