"use strict";
let jsSHA = require("jssha");
module.exports = function (API, $http,$httpParamSerializer) {
  const getHashedPassword = function (password) {
      var sha1 = new jsSHA("SHA-1", "TEXT");
      sha1.update("vart:" + password);
      return sha1.getHash("HEX");
  };
    return {

        getSignups: function (criteria) {
            return $http.get(API + "/signups?"+ $httpParamSerializer(criteria)).then(res => {
                return res.data;
            });
        },

        activateSignup: function (id, selectedPavId) {
            var url = API + "/signups/" + id + "/activate";
            if (selectedPavId) {
                url += "?pavId=" + selectedPavId;
            }

            return $http.post(url).then(res => {
                return res.data;
            });
        },
        getTenantAccount: function(id) {
          return $http.get(API + "/tenants/userByTenantId/all?tenantId=" + id).then(res => res.data);
        },
        resetTenantAccount: function(criteria) {
          criteria.password = getHashedPassword(criteria.password);
          return $http.post(API + "/tenants/users/changePassword?id=" + criteria.id + "&password=" + criteria.password).then(res => res.data);
        }
    }
};
