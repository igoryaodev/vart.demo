"use strict";

module.exports = function($scope, $state, $modal, mobile){
	let 
		modal = null,
		loadUsers = null;

	$scope.criteria = {
		page: $state.params["page"] || 1,
		Criteria: 0,
		Keyword: $state.params["Keyword"]
	}

	loadUsers = function(){
		mobile.getUsersList($scope.criteria).then(data => {
			$scope.users = data;
		})
	}
	loadUsers();

	$scope.search = function(){
		$scope.criteria.page = 1;
		loadUsers();
	}
	
}	