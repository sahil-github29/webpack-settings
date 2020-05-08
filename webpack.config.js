const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/" // on production this will be the domain name
  },
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
            loader: "file-loader"
          }
        ]
      },
      {
        // to read css in javascript and add that to DOM
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        // to tranform scss files
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        // to tranform class properties
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  }
};
