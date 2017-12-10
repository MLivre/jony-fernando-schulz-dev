const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8081,
        contentBase: './public'
    }
};