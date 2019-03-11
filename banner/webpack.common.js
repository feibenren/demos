const path = require("path");
const cleanPlugin = require("webpack-clean-plugin");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    /* index: "./scripts/index.js",
    test: "./scripts/test.js",
    zoom: "./scripts/zoom.js",
    waterfall: "./scripts/waterfall.js",
    lazyload: "./scripts/lazyload.js", */
    // debounce: "./scripts/debounce.js",
     test: "./scripts/test.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts/[name]_[hash].js"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /.html$/,
        use: [
          "html-loader",
          
        ]
      },
      {
        test: /.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      
    ]
  },
  plugins: [
    new cleanPlugin({
      on: "emit",
      path: ["./dist"]
    }),
    /* new htmlPlugin({
      filename: "index.html",
      template: "index.html",
      chunks: ["index"]
    }),
    */
    new htmlPlugin({
      filename: "test.html",
      template: "test.html",
      chunks: ['test']
    }), 
    /* new htmlPlugin({
      filename: "zoom.html",
      template: "zoom.html",
      chunks: ["zoom"]
    }), */
    /* new htmlPlugin({
      filename: "waterfall.html",
      template: "waterfall.html",
      chunks: ["waterfall"]
    }), */
   /*  new htmlPlugin({
      filename: "lazyload.html",
      template: "lazyload.html",
      chunks: ["lazyload"]
    }), */
    /* new htmlPlugin({
      filename: "debounce.html",
      template: "debounce.html",
      chunks: ["debounce"]
    }), */
  ]
};
