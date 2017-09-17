"use strict";

module.exports = function ($sce) {
    return function (value) {
        return $sce.trustAsHtml(value);
    }
};