const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  MiniCssExtractPlugin  = require("mini-css-extract-plugin");
// const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin"); webp images


module.exports = merge(common,{
    mode: "production",
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin(),
        // new ImageminWebpWebpackPlugin({
        //     config: [{
        //       test: /\.(jpe?g|png)/,
        //       options: {
        //         quality:  75
        //       }                                   Webp images
        //     }],
        //     overrideExtension: true,
        //     detailedLogs: false,
        //     silent: false,
        //     strict: true
        //   })
    ],
        module: {
            rules: [
                 {
                        test: /\.scss$/,
                        use: [
                        MiniCssExtractPlugin.loader, //Extract css into files 
                        "css-loader", // turns css to common.js
                        "sass-loader" // turn scss to css
                    ]
                }
            ]
        }
});
// devtool: false,