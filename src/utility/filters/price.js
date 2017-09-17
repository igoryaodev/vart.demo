/**
 *  16/5/17.
 */
"use strict";

module.exports = function () {
    return function (value) {
        if (value == undefined || isNaN(value)) {
            value = 0;
        }

        return "¥ " + value.toFixed(2);
    };
};