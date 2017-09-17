"use strict";

module.exports = function($scope, $state, $modal, mobile, tips){

	let mobiles = {
			modal: null,
			loadBlacUser: function(){
				mobile.getBlackUsers($scope.criteria).then(data => {
					$scope.blackUsers = data;
				});
			},
			saveBlack: function(model){
				mobile.newBlackUser(model).then(() => {

				})
			},
			removeBlack: function(id){
				mobile.removeBlackUser(id).then(() => {
					tips.danger("删除成功");
					mobiles.loadBlacUser();
				})
			}

	}

	$scope.criteria = {
		page: $state.params["page"] || 1,
		Keyword: $state.params["Keyword"]
	}

	mobiles.loadBlacUser();

	$scope.search = function(){
		$scope.criteria.page = 1;
		mobiles.loadBlacUser();
	}

	$scope.openBlackUserModal = function(){
		$scope.blackUser = [];
        mobiles.modal = $modal({
            template: require("./black.user.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
	}
	$scope.removeBlackUser = function(id){
		mobiles.removeBlack(id);
	}
	$scope.save = function(){
		if($scope.blackUser){
			angular.forEach($scope.blackUser, function(item){
				mobiles.saveBlack({
					id: 0,
					memberId: item.MemberId,
					userId: item.id
				});
			})
			tips.success("新增成功");
			mobiles.modal.hide();
			mobiles.loadBlacUser();
		}else{
			tips.danger("选择用户");
		}
		
	}
}