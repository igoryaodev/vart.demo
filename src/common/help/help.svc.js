/**
 *  15/12/30.
 */
"use strict";

module.exports = function (API, $http,$httpParamSerializer) {

    return {
        getHelpList: function(criteria) {
            return $http.get(API + "/messageDetail?" + $httpParamSerializer(criteria)).then(res => res.data);
        },
        addHelpNotice: function(criteria) {
            return $http.post(API + "/messageDetail",criteria).then(res => res.data);
        },
        removeHelpNotice: function(id) {
            return $http.delete(API + "/messageDetail?ids=" + id).then(res => res.data);
        },
        editHelpNotice: function(criteria) {
            return $http.put(API + "/messageDetail", criteria).then(res => res.data);
        },
        getHelpById:function(id) {
            return $http.get(API + "/messageDetail/" + id).then(res => res.data);
        }
    }

};

