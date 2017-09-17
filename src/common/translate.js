/**
 *  16/3/26.
 */
"use strict";

let angular = require("angular"),
    angularTranslate = require("exports?'pascalprecht.translate'!angular-translate");

require("angular-translate-storage-local");
require("angular-translate-storage-cookie");

module.exports = angular.module("common.translate", [
        angularTranslate,
        require("angular-cookies")
    ])
    .factory("translate", function ($filter) {
        return function (value, options) {
            return $filter("translate")(value, options);
        }
    })
    .config(function ($translateProvider) {

        $translateProvider.useLocalStorage();
        $translateProvider.translations("en_US", require("./en.json"));
        $translateProvider.translations("zh_CN", require("./zh.json"));
        $translateProvider.fallbackLanguage("zh_CN");
        $translateProvider.registerAvailableLanguageKeys("zh_CN");
        $translateProvider.registerAvailableLanguageKeys("en_US");
        $translateProvider.determinePreferredLanguage();
    }).name;