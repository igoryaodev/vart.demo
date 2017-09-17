/**
 *  16/2/1.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.notification", [])
    .factory("notification", require("./notification.svc"))
    .config(function ($stateProvider) {
        $stateProvider.state("app.notification", {
            url: "/notifications?page",
            template: require("./notification.list.html"),
            controller: require("./notification.list.ctrl")
        });
    })
    .name;
