"use strict";

module.exports = function($rootScope, $scope, $state, authority, $modal, tips){
	let modal;
	$scope.tenant = {
		page: $state.params["page"] || 1,
		name: $state.params["name"]
	}
	let load = function(){
		authority.getTenantIdList($scope.tenant).then(data => {
			$scope.tenantList = data;
		});
	}
	load();
	$scope.new = function(){
		$scope.newTenantId = {
			isDeleted: false
		}
		modal = $modal({
            template: require("./new.tenant.id.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
		
	}
	$scope.edit = function(item){
		$scope.newTenantId = item;
		$scope.saveType = 1;
		modal = $modal({
            template: require("./new.tenant.id.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
	}
	let remove = function(ids){
		authority.removeTenantId(ids).then(() => {
			tips.danger("关闭成功");
			load();
		})
	}
	$scope.remove = function(ids){
		remove(ids.toString());
	}
	$scope.search = function(){
		load();
	}
	$scope.save = function(tenant){
		if($scope.saveType == 1){
			authority.editTenantId($scope.newTenantId).then( () => {
				tips.success("修改成功");
				modal.hide();
				load();
			});
		}else{
			authority.newTenantId($scope.newTenantId).then(() => {
				tips.success("新建成功");
				modal.hide();
				load();
			});
		}
	}

}