/**
 *  16/5/6.
 */
"use strict";

let swal = require("sweetalert");

module.exports = function ($q, translate) {
    return {
        confirm: function (text, yes, no) {

            swal({
                title: translate("common.caution"),
                text: text,
                showCancelButton: true,
                type: "warning"
            }, isConfirm => {
                if (isConfirm && yes) {
                    yes();
                } else if (no) {
                    no();
                }
            });
        },
        warning: function (text, cb) {
            swal({
                title: translate("common.caution"),
                text: text,
                type: "warning"
            }, cb);
        },
        success: function (text, cb) {
            swal({
                title: translate("common.success"),
                text: text,
                type: "success"
            }, cb);
        },
        error: function (text, cb) {
            swal({
                title: translate("common.error"),
                text: text,
                type: "error"
            }, cb);
        }
    };

};