var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractScss = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            {
                test: /\.scss$/,
                use: extractScss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractScss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        extractScss,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}