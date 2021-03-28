const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve('./dist'),
    },
    devServer: {
        port: 3000,
        progress: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'webpack-dev',
            publicPath: './'
        }),
        new miniCssExtract({
            filename: 'main.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtract.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    // miniCssExtract.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            }
        ],
    },
}