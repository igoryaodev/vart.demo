/**
 *  15/5/2.
 */
"use strict";

let angular = require("angular"),
    vendor = require("./vendor");

require("./scss/page.scss");
// require("./scss/global.scss");
require("./scss/skin-vart.scss");

let app = angular.module("app", [
    require("./common"),
    require("./utility"),
    require("./wechat"),
]).name;

let module = angular.module("vart", [vendor, app]);

angular.element(document).ready(() => {
    angular.bootstrap(document, [module.name], {
        //strictDi: true

    });
});