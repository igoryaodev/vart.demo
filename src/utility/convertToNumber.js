/**
 *  16/3/8.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("vart.utility.convertToNumber", [])
    .directive("convertToNumber", function () {

        return {
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (val) {
                    return parseInt(val, 10);
                });
                ngModel.$formatters.push(function (val) {
                    return val == undefined ? "0" : "" + val;
                });
            }
        };
    })
    .name;