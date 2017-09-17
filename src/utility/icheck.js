/**
 *  16/3/11.
 */

"use strict";

require("icheck");
require("icheck/skins/flat/_all.css");

module.exports = function () {

    return {
        restrict: "A",
        require: "ngModel",
        scope: {},
        link: function (scope, ele, attr, ctrl) {
            ele.iCheck({
                checkboxClass: 'icheckbox_flat-grey',
                radioClass: 'iradio_flat-grey'
            });

            ele.on("ifChecked", () => {
                ctrl.$setViewValue(true);
            });

            ele.on("ifUnchecked", () => {
                ctrl.$setViewValue(false);
            });

            ctrl.$render = function () {
                if (ctrl.$viewValue == true) {
                    ele.iCheck("check");
                } else {
                    ele.iCheck("uncheck");
                }
            };
        }
    };
};


