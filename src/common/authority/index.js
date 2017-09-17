/**
* Created by qg on 16/12/13
*/
"use strict";

const ng = require('angular');

module.exports = ng.module("common.authority", [
  // require("./consignment")
  ])
      .factory("authority",require("./authority.svc"))
      .directive("tenantPicker", require("./picker"))
      .directive("menuModal", require("./menu.modal"))
      .config(($stateProvider) => {
        $stateProvider.state("app.rights_master",{
          abstract: true,
          template: require("./rights.manage.master.html")
        })
        .state("app.role_menu",{
          parent: "app.rights_master",
          url: "/rightsManage",
          template: require('./rights.manage.html'),
          controller: require("./rights.manage.ctrl")
        })
        .state("app.role_user",{
          parent: "app.rights_master",
          url: "/roleUser",
          template: require("./rights.role.user.html"),
          controller: require("./rights.role.user.ctrl")
        })
        .state("app.new_tenant_menu_master",{
          abstract: true,
          template: require("./new.tenant.menu.master.html"),
          controller: require("./new.tenant.menu.master.ctrl")
        })
        .state("app.new_tenant_menu",{
          parent: "app.new_tenant_menu_master",
          url: "/newTenantMenu",
          template: require("./new.tenant.menu.html"),
          controller: require("./new.tenant.menu.ctrl")
        })
        .state("app.new_tenant_user", {
          parent: "app.new_tenant_menu_master",
          url: "/newTenantUser",
          template: require("./new.tenant.user.html"),
          controller: require("./new.tenant.user.ctrl")
        })
        .state("app.new_tenant_id", {
          parent: "app.new_tenant_menu_master",
          url: "/newTenantId?page&name",
          template: require("./new.tenant.id.html"),
          controller: require("./new.tenant.id.ctrl")
        })
        .state("app.memus_setting", {
              parent:"app.rights_master",
              url:"/menus/setting",
              template: require("./menu.setting.html"),
              controller: require("./menu.setting.ctrl")
        })
        .state("app.menu_controller",{
          parent: "app.rights_master",
          url: "/menuController",
          template: require("./menu.controller.html"),
          controller: require("./menu.controller.ctrl")
        })
        .state("app.consignment_list",{
          parent: "app.new_tenant_menu_master",
          url: "/consignment/list?page",
          template: require("./consignment.list.html"),
          controller: require("./consignment.list.ctrl")
        })
      })
      .config($translateProvider =>{
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.translations("en_US", require("./en.json"));
      })
      .name;
