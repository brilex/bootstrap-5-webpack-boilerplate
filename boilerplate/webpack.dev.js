const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common,{
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: {
            test: /\.scss$/,
            use: [
                "style-loader", // Inject css to DOM
                "css-loader", // turns css to common.js
                "sass-loader" // turn scss to css
            ]
        },
   
    }
  
});
// devtool: false,