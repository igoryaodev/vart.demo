/**
 *  16/2/1.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.help", [])
    .factory("help", require("./help.svc"))
    .config(function ($stateProvider) {
        $stateProvider.state("app.help_list", {
            url: "/help?page",
            template: require("./help.list.html"),
            controller: require("./help.list.ctrl")
        })
        .state("app.help_index",{
            url: "/help/:id",
            template: require("./help.index.html"),
            controller: require("./help.index.ctrl")
        })
        .state("app.help_detail",{
            url: "/help_detail?page",
            template: require("./help.detail.html"),
            controller: require("./help.detail.ctrl")
        })
    })
    .name;
