"use strict";

let angular = require("angular"),
    QRCode = require("exports?QRCode!qrcodejs/qrcode.js");

module.exports = angular.module("utility.shareModal", [])
    .directive("shareModal", function () {

        return {
            restrict: "EA",
            scope: {
                url: "@",
                title: "@",
                sceneid: "@",
                product: "@"
            },
            controller: function ($rootScope, $scope, $element, $modal, $http, WECHAT_API) {

                $element.on("click", function () {
                    // let tenantId = $rootScope.G.auth.tenantId;
                    // if($scope.product){
                    //     let id = Number($scope.product);
                    //     switch (tenantId){
                    //         case 1:
                    //         //vart
                                
                    //             break;
                    //         case 117:
                    //         //yuzm
                            
                    //             break;
                    //         case 123:
                    //         //yicang

                    //             break;
                    //         case 123:
                    //         //ucca

                    //             break;
                    //     }
                    // }
                    $http.get(WECHAT_API + "/qrcode?sceneid=" + $scope.sceneid).then(res => {
                        $scope.wechatimg = res.data;
                    });

                    $modal({
                        title: $scope.title,
                        template: require("./index.html"),
                        backdrop: false,
                        container: "body",
                        scope: $scope
                    });
                });
            }
        };
    })
    .directive("qrcode", function () {
        return {
            restrict: "A",
            link: function (scope, ele, attr) {
                new QRCode(ele[0], {
                    text: attr["qrcode"],
                    width: 600,
                    height: 600,
                    correctLevel: QRCode.CorrectLevel.M
                });
            }
        };
    })
    .name;