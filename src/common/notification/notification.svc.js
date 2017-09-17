/**
 *  15/12/30.
 */
"use strict";

module.exports = function (API, $http) {

    return {
        getUnread: function () {
            return $http.get(API + "/notifications/unread", {
                ignoreLoadingBar: true
            }).then(res => {
                return res.data;
            });
        },
        getNotifications: function (page) {
            return $http.get(API + "/notifications?page=" + page).then(res => {
                return res.data;
            });
        },
        read: function (id) {
            return $http.put(API + "/notifications/" + id + "/read", {
                ignoreLoadingBar: true
            }).then(res => {
                return res.data;
            });
        }
    }

};

