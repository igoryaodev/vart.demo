"use strict";

let webpack = require("webpack"),
    path = require("path"),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (option) {

    const PROD = !!option.PROD;

    let config = {
        cache: true,
        entry: {
            app: ["./src/index.js"]
        },
        output: {
            path: path.join(__dirname, "build", PROD ? "release" : "debug"),
            filename: "bundle.[name].[hash].js"
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2015"]
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.json/,
                loader: "json"
            }, {
                test: /\.html$/,
                loader: "html"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: "file-loader?name=img/[hash].[ext]"
            }, {
                test: /\.xlsx$/,
                loader: "file-loader"
            }]
        },
        plugins: [
            new webpack.ProvidePlugin({
                "$": "jquery",
                "jQuery": "jquery",
                "window.jQuery": "jquery"
            }),
            new htmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                favicon: "./src/favicon.ico",
                hash: false
            }),
            new ExtractTextPlugin("style.[hash].css", {
                allChunks: true
            })
        ],
        resolve: {
            root: [path.resolve("./src")]
        },
        externals: {
            "jquery": "jQuery",
            "ueditor": "UE",
            "angular": "angular"
        }
    };

    if (PROD) {
        config.plugins.push(
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new webpack.optimize.UglifyJsPlugin({
                warnings: false,
                mangle: false,
                comments: false
            }),
            new webpack.optimize.DedupePlugin()
        );
    } else {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
        config.entry.app.unshift("webpack-dev-server/client?http://localhost:8081", "webpack/hot/dev-server");
    }

    return config;
};

