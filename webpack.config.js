const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const path = require("path");

module.exports = {
    entry: {
        'dist/app.js': ['whatwg-fetch', './src/js/app.jsx'],
        'dist/main.css~': './src/scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2','react']
            }
        },
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/main.css'),
    ]
}