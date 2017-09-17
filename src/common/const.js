/**
 *  16/3/18.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.const", [])
    .constant("API", "/api")
    .constant("WECHAT_API", "http://api.vart.cc/wechat-api/")
    .constant("QINIU_UPLOAD", "http://upload.qiniu.com/")
    .constant("basepath", "http://vartcdn.vart.la/")
    .constant("SF_API","/sfexpressapi")
    .constant("SF_APPID","00024030")
    .constant("SF_APPKEY","597EA87E7D04A95BB646310482DA8ADF")
    .name;
