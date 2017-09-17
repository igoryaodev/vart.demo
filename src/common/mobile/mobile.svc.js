"use strict";

module.exports = function(API, $http, $httpParamSerializer) {
	return {
		getUsersList: function(criteria){
			return $http.get(API + "/users?" + $httpParamSerializer(criteria)).then(res => res.data);
		},
		newBlackUser: function(criteria){
			return $http.post(API + "/newBlackUsers", criteria).then(res => res.data);
		},
		getBlackUsers: function(criteria){
			return $http.get(API + "/blackUsers?" + $httpParamSerializer(criteria)).then(res => res.data);
		},
		removeBlackUser: function(id){
			return $http.post(API + "/deleteBlackUsers?id=" + id).then(res => res.data);
		},
		getWordsList: function(criteria){
			return $http.get(API + "/sensitiveWord?" + $httpParamSerializer(criteria)).then(res => res.data);
		},
		newWords: function(criteria){
			return $http.post(API + "/newSensitiveWord", criteria).then(res => res.data);
		},
		editWords: function(criteria){
			return $http.post(API + "/editSensitiveWord", criteria).then(res => res.data);
		},
		removeWords: function(id){
			return $http.post(API + "/deleteSensitiveWord?id=" + id).then(res => res.data);
		}
	}
}