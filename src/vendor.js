/**
 *  16/2/2.
 */
"use strict";

//bootstrap-switch
require("bootstrap-switch");
require("bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css");

let angular = require("angular");

let angularStrap = require("exports?'mgcrea.ngStrap'!angular-strap");
require("angular-strap/dist/angular-strap.tpl.js");
require("bootstrap-additions/dist/bootstrap-additions.css");

require("ng-echarts/dist/ng-echarts.min.js");
let angularLoadingBar = require("angular-loading-bar");
require("angular-loading-bar/build/loading-bar.min.css");

require("sweetalert/dist/sweetalert.css");
require("ui-select/dist/select.min.css");
require("angularjs-color-picker/dist/angularjs-color-picker.min.css");
require("angularjs-color-picker/dist/themes/angularjs-color-picker-bootstrap.min.css");
require("tinycolor2/dist/tinycolor-min");
require("angularjs-color-picker/dist/angularjs-color-picker.min");


module.exports = angular.module("vart.vendor", [
    require("ui-select"),
    require("angular-sanitize"),
    require("angular-i18n/zh-cn"),
    require("angular-i18n/en-us"),
    require("angular-animate"),
    'ng-echarts',
    require("exports?'frapontillo.bootstrap-switch'!angular-bootstrap-switch"),
    angularLoadingBar,
    angularStrap,
    require("angular-ui-router"),
    'color.picker'
])
.name;
