/**
 *  16/3/26.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.profile", [])
    .config(function ($stateProvider) {
        $stateProvider
            .state("app.profile", {
                url: "/profile?pwd",
                template: require("./profile.html"),
                controller: require("./profile.ctrl")
            });
    })
    .config($translateProvider => {
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.translations("en_US", require("./en.json"));
    })
    .name;