var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        "./index.js"
    ],
    debug: true,
    devtool: 'source-map',
    output: {
        publicPath: "minified/scripts/",
        path: __dirname + "/minified/scripts/",
        filename: "[name]-[hash].js",
        chunkname: "[name]-[hash].js",

    },
    module: {
        loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname,'../'),
                exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0']
				}
			}
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname)
        ],
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ES6 Module Demo',
            template: './index.ejs',
            inject: 'body',
            filename: '../../index.html'
        }),
        new CleanWebpackPlugin(['scripts'], {
            root: "./minified",
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "shared",
            minChunks: Infinity 
        })
    ]
};