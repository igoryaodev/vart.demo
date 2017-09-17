/**
 *  15/1/25.
 */
"use strict";

module.exports = function (API, $http) {

    return {

        getCountries: function () {
            return $http.get(API + "/countries").then(res => {
                return res.data;
            });
        }
    };

};