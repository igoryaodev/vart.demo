/**
 *  16/3/18.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.scaffold", [])
    .factory("menu", require("./menu.svc"))
    .config(function ($stateProvider) {

        $stateProvider
            .state("app", {
                abstract: true,
                template: require("./main.html"),
                controller: require("./main.ctrl")
            }) 
          /*  .state("app.menus_master", {
                abstract: true,
                template: require("./menu.master.html")
            })
            .state("app.memus_set", {
                parent:"app.menus_master",
                url:"/menus/setting",
                template: require("./menu.setting.html"),
                controller: require("./menu.setting.ctrl")
            })*/
            .state("login", {
                abstract: true,
                template: require("./login.html")
            });

    })
    .name;