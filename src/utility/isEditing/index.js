/**
 *  16/3/7.
 */
"use strict";

let angular = require("angular");

module.exports = angular.module("utility.isEditing", [])
    .directive("isEditing", function () {
        return {
            restrict: "A",
            scope: {
                isEditing: "="
            },
            controller: function ($scope) {
                this.isEditing = function () {
                    return $scope.isEditing;
                };

                this.edit = function () {
                    $scope.isEditing = true;
                };
            }
        };
    })
    .directive("editingItem", function () {
        return {
            restrict: "E",
            require: ["^isEditing"],
            scope: {
                display: "="
            },
            transclude: true,
            template: require("./index.html"),
            link: function (scope, ele, attr, ctrl) {
                scope.isEditing = function () {
                    return ctrl[0].isEditing();
                };

                scope.edit = function () {
                    ctrl[0].edit();
                };
            }
        }
    })
    .name;