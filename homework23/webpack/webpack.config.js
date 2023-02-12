const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: ['./src/main.js','./src/style.scss']
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js'
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new MiniCssExtractPlugin({
            filename:'main.min.css'
        }),
    ]
}