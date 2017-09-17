/**
 *  16/3/8.
 */
"use strict";
let angular = require("angular");

module.exports = angular.module("utility.upload", [
        require("ng-file-upload")
    ])
    .factory("uploadResource", require("./upload.svc"))
    .directive("audioUpload", require("./audioUpload"))
    .directive("videoUpload", require("./videoUpload"))
    .directive("imgUpload", require("./imgUpload"))
    .directive("imgMultiUpload", require("./imgMultiUpload"))
    .directive("imgSlideUpload", require("./imgSlideUpload"))
    .directive("videoSlideUpload", require("./videoSlideUpload"))
    .directive("imgFixUpload", require("./imgFixUpload"))
    .directive("imgSlideDefault", require("./imgSlideDefault"))
    .directive("textUpload", require("./textUpload"))
    .name;
