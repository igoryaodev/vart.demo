/**
 *  16/5/31.
 */
"use strict";

let angular = require("angular");
module.exports = function ($datepickerProvider) {

    angular.extend($datepickerProvider.defaults, {
        dateFormat: "yyyy-MM-dd",
        modelDateFormat: "yyyy-MM-dd",
        dateType: "string",
        animation: ""
    });
};