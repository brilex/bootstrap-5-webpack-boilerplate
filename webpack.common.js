const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
 plugins: [
        new HtmlWebpackPlugin({ // Generates default index.html
            filename: 'index.html',
            template: './src/template.html'
    }), 
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'about.html',
          template: './src/about.html'
        }),
      ],
       entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
   
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
              }, 
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {
                    loader: ImageMinimizerPlugin.loader,
                    options: {
                      severityError: "warning", // Ignore errors on corrupted images
                      minimizerOptions: {
                        plugins: ["gifsicle"],
                      },
                    },
                  },
                ],
              },
  
        ]
    },
    
}
// devtool: false,