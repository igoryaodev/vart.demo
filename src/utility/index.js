/**
 *  16/1/28.
 */
"use strict";

let angular = require("angular");
require("./comm");

module.exports = angular.module("utility", [
        require("./masonry"),
        // require("./isEditing"),
        require("./convertToNumber"),
        require("./shareModal"),
        require("./usbScanner"),
        require("./upload"),
        require("./filters")
    ])
    .directive("pager", require("./pager"))
    .directive("customProperty", require("./property"))
    // .directive("rtfEditor", require("./rtfEditor"))
    .directive("formValidator", require("./formValidator"))
    .directive("icheck", require("./icheck"))
    .factory("swal", require("./swal"))
    .constant("localTime", require("./localtime"))
    .factory("tips", require("./alert.tips"))
    .run(function ($rootScope, $document, $timeout) {
        $rootScope.$on("modal.hide", function () {
            if ($document.find(".modal").length > 0) {
                $timeout(function () {
                    $document.find("body").addClass("modal-open");
                }, 100);
            }
        });
    })

    .config(function($provide) {
        $provide.decorator('ColorPickerOptions', function($delegate) {
            var options = angular.copy($delegate);
            // options.round = true;
            options.alpha = false;
            options.format = 'hexString';
            // options.reset = {
            //     show: true,
            //     label: '重置',
            //     class: '',
            // }
            return options;
        });
    })
    .config($translateProvider => {
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.translations("en_US", require("./en.json"));
    })
    .name;