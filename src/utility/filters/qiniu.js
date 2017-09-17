/**
 *  14/12/7.
 */
"use strict";

module.exports = function (host) {

    return function ($sce) {

        return function (value, style) {

            if (value == undefined) {
                return undefined
            } else {

                if (value.indexOf("http://") < 0) {
                    value = host + value;
                }
                else {
                    return value;
                }

                if (value.indexOf("#") >= 0) {
                    value = value.substr(0, value.indexOf("#"));
                }

                if (style && style.length > 0) {
                    value += "?" + style;
                }

                return $sce.trustAsResourceUrl(value);
            }

        }
    }
};

