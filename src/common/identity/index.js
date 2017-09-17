/**
 *  16/3/18.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.identity", [])
    .factory("identity", require("./identity.svc"))
    .config(function ($httpProvider) {

        //权限
        $httpProvider.interceptors.push(function ($rootScope) {
            return {
                request: function (config) {

                    config.headers = config.headers || {};

                    if ($rootScope.G.auth) {
                        config.headers["Authorization"] = "Bearer " + $rootScope.G.auth["accessToken"];
                    }

                    return config;
                }
            };
        });

    })
    .config(function ($stateProvider) {
        $stateProvider
            .state("login.login", {
                url: "/login",
                template: require("./login.html"),
                controller: require("./login.ctrl.js")
            })
            .state("login.signup", {
                url: "/signup",
                template: require("./signup.html"),
                controller: require("./signup.ctrl")
            })
            .state("login.retrieve_pwd", {
                url: "/pwd/retrieve",
                template: require("./pwd.retrieve.html"),
                controller: require("./pwd.retrieve.ctrl.js")
            })
            .state("login.reset_pwd", {
                url: "/pwd/reset?r",
                template: require("./pwd.reset.html"),
                controller: require("./pwd.reset.ctrl.js")
            });
    })
    .run(function ($rootScope, $state) {

        $rootScope.G = {};
        if (window.localStorage.getItem("auth")) {
            $rootScope.G.auth = JSON.parse(window.localStorage.getItem("auth"));
        }

        $rootScope.$on("loginRequired", ()=> {
            $state.go("login.login");
        });

    })
    .name;