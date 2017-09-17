/**
 *  16/2/1.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.message", [])
    .factory("message", require("./message.svc"))
    .config(function ($stateProvider) {
        $stateProvider.state("app.message_list", {
            url: "/messages?page",
            template: require("./message.list.html"),
            controller: require("./message.list.ctrl")
        })
        .state("app.message_index",{
            url: "/messages/:id",
            template: require("./message.index.html"),
            controller: require("./message.index.ctrl")
        })
        .state("app.message_detail",{
            url: "/message_detail?page",
            template: require("./message.detail.html"),
            controller: require("./message.detail.ctrl")
        })
    })
    .name;
