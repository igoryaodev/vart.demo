/**
 *  15/7/16.
 */
"use strict";

module.exports = function (API, $http) {
    return {
        getUploadToken: function (catalog, ext) {
            return $http.get(API + "/upload/token/" + catalog + "?name=" + encodeURIComponent(ext)).then(res => {
                return res.data;
            }, () => {
                alert("上传失败");
            });
        }
    };
};