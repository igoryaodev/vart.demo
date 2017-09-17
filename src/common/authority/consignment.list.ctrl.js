"use strict";

module.exports = function($scope, $state, authority, $modal, tips){
	let modal;
	$scope.criterial = {
		page: $state.params["page"] || 1
	}
	let load = function(){
		authority.getConsignment($scope.criterial).then(data => {
			$scope.consignment = data;
		});
	}
	load();
	$scope.newConsignmentModal = function(){
		$scope.consignmentModal = {
			id: 0,
			tenantId: 0
		}
		modal = $modal({
			template: require("./consignment.modal.html"),
			backdrop: false,
			show: true,
			scope: $scope
		})
	}
	$scope.saveTenant = function(){
		if($scope.consignmentModal && $scope.consignmentModal.tenant && $scope.consignmentModal.tenant.id){
			$scope.consignmentModal.tenantId = $scope.consignmentModal.tenant.id;
			delete $scope.consignmentModal.tenant;
		}else{
			tips.danger("请选择机构");
			return;
		}
		authority.newConsignment($scope.consignmentModal).then(() => {
			tips.success("新增成功");
			load();
			modal.hide();
		})
	}
	$scope.remove = function(id){
		if(id){
			authority.removeConsignment(id).then(() => {
				load();
				tips.danger("删除成功");
			})
		}else{
			tips.danger("删除失败");
		}
	}
	$scope.pageChange = function(page) {
	    $scope.criteria.page = page;
	    load();
	}
}