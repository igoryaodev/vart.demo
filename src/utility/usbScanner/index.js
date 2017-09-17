/**
 *  16/5/17.
 */
"use strict";

//扫码枪输入组件
let angular = require("angular"),
    swal = require("sweetalert");

module.exports = angular.module("utility.usbScanner", [])
    .directive("usbScanner", function ($window, translate) {

        return {
            restrict: "A",
            scope: {
                onScan: "&"
            },
            link: function ($scope, $element) {


                $element.on("click", function () {

                    let chars = [];
                    swal({
                        title: translate("common.scan"),
                        text: translate("utility.scannerWorking"),
                        confirmButtonText: translate("common.back"),
                        imageUrl: require("./scanner.jpg")
                    }, function () {
                        angular.element(window).unbind("keypress");

                    });

                    angular.element(window).on("keypress", function (e) {

                        if (e.which === 13) {
                            e.preventDefault();
                            swal.close();
                            angular.element(window).unbind("keypress");

                            let value = chars.join("");
                            $scope.onScan({value: value});

                        } else {
                            chars.push(String.fromCharCode(e.which));
                        }
                    });
                });
            }
        }
    }).name;
