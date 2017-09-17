/**
 *  16/3/23.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("common.tenant", [])
    .factory("tenant", require("./tenant.svc"))
    .directive("tenantGroupPicker", require("./group.picker"))
    .config(function ($stateProvider) {
        $stateProvider
            .state("app.tenant", {
                template: require("./master.html"),
                abstract: true
            })
            .state("app.tenant_group_list", {
                parent: "app.tenant",
                url: "/tenants/groups",
                template: require("./group.list.html"),
                controller: require("./group.list.ctrl")
            })
            .state("app.tenant_user_list", {
                parent: "app.tenant",
                url: "/tenants/users?page&name",
                template: require("./user.list.html"),
                controller: require("./user.list.ctrl")
            })
            .state("app.tenant_info", {
                parent: "app.tenant",
                url: "/tenants/info",
                template: require("./info.index.html"),
                controller: require("./info.index.ctrl")
            })
            .state("app.tenant_user_index", {
                url: "/tenants/users/{id}",
                template: require("./user.index.html"),
                controller: require("./user.index.ctrl")
            })
            .state("app.tenant_right_manage", {
              parent: "app.tenant",
              url: "/tenants/rights",
              template: require("./rights.manage.html"),
              controller: require("./rights.manage.ctrl")
            })
            .state("app.tenant_role_manage", {
              parent: "app.tenant",
              url: "/tenants/role",
              template: require("./rights.role.user.html"),
              controller: require("./rights.role.user.ctrl")
            })

    })
    .config($translateProvider=> {
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.translations("en_US", require("./en.json"));
    })
    .name;
