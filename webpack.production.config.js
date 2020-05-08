const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/bundle[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/static/"
  },
  mode: "production",
  resolve: {
    // you can import files without extentions
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        // to read import images in javascript and add that to DOM
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img"
            }
          }
        ]
      },
      {
        // to read css in javascript and add that to DOM
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        // to transform scss files
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        // to transform class properties
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // this will preserver the name and the extension
              outputPath: "fonts/" // will be transpile in dist/fonts folder
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TerserPlugin({ cache: true }),
    new MiniCssExtractPlugin({
      filename: "css/style[contenthash].css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        // '**/*' => this is our output.path directory
        "**/*",
        // path.join(process.cwd(), "build/**/*")
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HtmlWebpackPlugin({
      template: "index.html" // reference index file
    })
  ]
};
