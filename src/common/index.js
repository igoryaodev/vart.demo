/**
 *  16/1/28.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common", [
        require("./translate"),
        require("./const"),
        require("./audit"),
        require("./identity"),
        require("./scaffold"),
        require("./notification"),
        require("./tenant"),
        require("./profile"),
        require("./authority"),
        require("./message"),
        require("./help"),
        require("./mobile"),
        require("angular-cache")
    ])
    .config(require("./http.config"))
    //.config(require("./bs.config"))
    .factory("city", require("./city.svc"))
    .name;
