"use strict";

var express = require("express"),
    proxy = require('proxy-middleware'),
    url = require('url');
var app = express();

 // app.use("/api", require("./app"));
if (process.env.NODE_ENV == "dev") {
    app.use("/api", proxy(url.parse("http://10.211.55.9/Vart.Member.WebApi")));
} else {
    app.use("/api", proxy(url.parse("http://172.16.100.7:8081")));
     app.use("/webapi", proxy(url.parse("http://172.16.100.7:8666")));
}
app.use("/", express.static("build/release/"));

app.listen(8080, function() {
    console.log("server started\t env:" + process.env.NODE_ENV);
});