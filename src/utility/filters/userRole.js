/**
 *  16/5/24.
 */
"use strict";

module.exports = function () {
    return function (value) {
        switch (value) {
            case 1:
                return "机构用户";
            case 2:
                return "热门用户";
            case 3:
                return "艺术家";
            case 10:
                return "官方号";
            default:
                return "";

        }

    };
};