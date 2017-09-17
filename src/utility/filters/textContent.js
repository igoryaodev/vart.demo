/**
 *  16/6/1.
 */
"use strict";

module.exports = function () {
    return function (value) {
        if (value) {
            return value.replace(/\n/g, "<br/>")
        }
    };
};