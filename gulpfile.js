"use strict";

let gulp = require("gulp"),
    del = require("del"),
    webpack = require('webpack');

gulp.task("watch", function () {

    let express = require('express'),
        WebpackDevServer = require('webpack-dev-server'),
        config = require('./webpack.config.js'),
        proxy = require('proxy-middleware'),
        url = require('url'),
        app = express();

    // app.use("/api", proxy(url.parse("http://172.16.1.200:8100")));  
    app.use("/api", proxy(url.parse("http://console.vip.vart.cc:8081")));
    // app.use("/api", proxy(url.parse("http://172.16.1.200:8188")));
    
    // website
    // app.use("/webapi", proxy(url.parse("http://172.16.100.7:8666")));
    app.use("/sfexpressapi", proxy(url.parse("http://172.16.100.7:8103")));
    // sf api
    app.use("/sfapi",proxy(url.parse("https://open-sbox.sf-express.com/rest/v1.0")));
    app.use('/', proxy(url.parse('http://localhost:8081/')));
    app.listen(8080);

    var server = new WebpackDevServer(webpack(config), {
        contentBase: "./build/debug",
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: '/',
        historyApiFallback: true,
        stats: {colors: true}
    }).listen(8081, 'localhost', function () {
        console.log('socketio listen 8081')
    });

});

gulp.task("release", function (cb) {

    let config = require("./webpack.make")({PROD: true});

    del.sync("./build/release/**");

    // gulp.src("./ueditor/build/**").pipe(gulp.dest("./build/release/ueditor"));

    webpack(config, function () {
        cb();
    });
});

gulp.task("debug", function (cb) {
    let config = require("./webpack.make")({PROD: false});

    del.sync("./build/debug/**");

    // gulp.src("./ueditor/build/**").pipe(gulp.dest("./build/debug/ueditor"));

    webpack(config, function () {
        cb();
    });
});
