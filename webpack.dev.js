const config = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
];


module.exports = merge(config, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        publicPath: '/',
        port: 8080,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*', // 5
        },
    },
    module: {
        rules: [{
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'thread-loader', ]
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'thread-loader', ]
            },
        ]
    },
    plugins,
})