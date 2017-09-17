/**
 *  16/2/2.
 */

"use strict";

let angular = require("angular"),
    masonry = require("masonry-layout"),
    imagesLoaded = require("imagesloaded");

module.exports = angular.module("vart.utility.mansory", [])
    .directive("masonry", function () {

        return {
            restrict: "A",
            controller: function ($scope, $element) {

                this.init = () => {
                    let msnry = new masonry($element[0], {
                        itemSelector: ".masonry-item"
                    });

                    let imgLoaded = imagesLoaded($element[0], ()=> {
                        msnry.layout();
                    });

                    imgLoaded.on("progress", ()=> {
                        msnry.layout()
                    });
                };

            }
        };

    }).directive("masonryItem", function () {
        return {
            restrict: "AC",
            require: "^masonry",
            link: function (scope, ele, attr, ctrl) {
                if (scope.$last == true) {
                    ctrl.init();
                }
            }
        }
    }).name;

