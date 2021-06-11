const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
 plugins: [
        new HtmlWebpackPlugin({ // Generates default index.html
            filename: 'index.html',
            template: './src/template.html'
    }), 
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'about.html',
          template: './src/about.html'
        })
      ],
    
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
           
        ]
    },
    
}
// devtool: false,