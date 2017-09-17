"use strict";

module.exports = function($scope, $state, customer, tips, $modal, $rootScope){
    let modal;
    $scope.criteria = {
        id: $state.params["id"] || 0
    };
        // 个人中心
    // 
    $scope.profile = {};
    let profileLoad = function(){
        customer.getProfile($scope.tenant.tenantId).then(data => {
            $scope.profiles = data;
            $scope.profile = data.list[0];
        });
    }

    $scope.saveProfile = function(){
       $scope.profile.tenantId = $scope.tenant.tenantId;
        if(!$scope.profile.id){
            customer.saveProfile($scope.profile).then(() => {
                tips.success("新增成功");
                profileLoad();
            });
        }else{
            customer.updateProfile($scope.profile).then(() => {
                tips.success("修改成功");
                profileLoad();
            });
        }

    }
    $scope.deleteProfile = function(id){
        customer.removeProfile(id).then(() => {
            tips.danger("删除成功");
            profileLoad();
        });
    }

    //会员福利
    //
    $scope.wechatProfileMenus = customer.wechatProfileMenus;
    $scope.memberShip = {};
    let memberShipLoad = function(){
        customer.getMemberShip($scope.tenant.tenantId).then(data => {
            $scope.memberShips = data;
            $scope.memberShip = data.list[0];
        });
    }
    $scope.saveMemberShip = function(){
       $scope.memberShip.tenantId = $scope.tenant.tenantId;
        if(!$scope.memberShip.id){
            customer.saveMemberShip($scope.memberShip).then(() => {
                tips.success("新增成功");
                memberShipLoad();
            });
        }else{
            customer.updateMemberShip($scope.memberShip).then(() => {
                tips.success("修改成功");
                memberShipLoad();
            });
        }

    }
    $scope.deleteMemberShip = function(id){
        customer.removeMemberShip(id).then(() => {
            tips.danger("删除成功");
            memberShipLoad();
        });
    }


    //首页信息
    $scope.tenant = {};
    let getTenant = function(){
        customer.getTenant($scope.criteria.id).then(data => {
            $scope.tenant = data;
            profileLoad();
            memberShipLoad();
        });
    }
    getTenant();
    $scope.wechatTheme = customer.wechatTheme;
    $scope.wechatProductMenus = customer.wechatProductMenus;
    let productMenus = [];
    $scope.selectMenu = function($item){
        productMenus.push($item);
    }
    $scope.refreshMenus = function(){

    }
	$scope.saveTenant = function(){
        customer.updateTenant($scope.tenant).then(() => {
            tips.success("修改成功");
        });

	}



}