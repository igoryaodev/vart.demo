/**
 *  15/12/30.
 */
"use strict";

module.exports = function (API, $http,$httpParamSerializer) {

    return {
        getMessageList: function(criteria) {
            return $http.get(API + "/messageNotices?" + $httpParamSerializer(criteria)).then(res => res.data);
        },
        addMessageNotice: function(criteria) {
            return $http.post(API + "/messageNotices",criteria).then(res => res.data);
        },
        removeMessageNotice: function(id) {
            return $http.delete(API + "/messageNotices?ids=" + id).then(res => res.data);
        },
        editMessageNotice: function(criteria) {
            return $http.put(API + "/messageNotices", criteria).then(res => res.data);
        },
        getMessageById:function(id) {
            return $http.get(API + "/messageNotices/" + id).then(res => res.data);
        },
        sendMessage: function(criteria) {
            return $http.post(API+"/messageUsers",criteria).then(res => res.data);
        },
        getMessageUser: function() {
            return $http.get(API + "/messageUsers").then(res => res.data)
        },
        editMessageUser: function(criteria) {
            return $http.put(API + "/messageUsers", criteria).then(res => res.data);
        }
    }

};

