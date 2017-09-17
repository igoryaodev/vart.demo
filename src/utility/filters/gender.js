/**
 *  16/5/17.
 */
"use strict";

module.exports = function (translate) {
    return function (value) {
        switch (value) {
            case 1:
                return translate("common.male");
            case 2:
                return translate("common.female");
            default:
                return translate("common.notset");
        }

    }
};