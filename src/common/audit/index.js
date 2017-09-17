/**
 *  16/1/28.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.audit", [])
    .factory("auditUser", require("./audit.svc"))
    .config(function ($stateProvider) {

        $stateProvider
            .state("app.audit_master", {
              abstract: true,
              template: require('./audit.master.html')
            })
            .state("app.reg_audit", {
                url: "/registration/approve?page&name",
                parent: 'app.audit_master',
                template: require("./audit.approve.html"),
                controller: require("./audit.approve.ctrl")
            })
            .state("app.audit_pwd", {
                url: "/audit/pwd",
                parent: 'app.audit_master',
                template: require("./audit.manage.pwd.html"),
                controller: require("./audit.manage.pwd.ctrl")
            })
    })
    .config($translateProvider=> {
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.translations("en_US", require("./en.json"));
    })
    .name;
