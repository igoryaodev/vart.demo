"use strict";

module.exports = function($scope, $state, customer, tips, $modal, $rootScope, $filter){
    let modal;
    let customerLoad = function(){
        customer.getCustomerList().then(data => {
            $scope.customerList = data;
        });
    }
     customerLoad();
    $scope.wechatTheme = customer.wechatTheme;
    $scope.wechatProductMenus = customer.wechatProductMenus;
    let productMenus = [];
    $scope.selectMenu = function($item){
        productMenus.push($item);
    }
    $scope.refreshMenus = function(){

    }
    $scope.openNewCustomerModal = function(){
        $scope.newCustomer = {};
        modal = $modal({
            template: require("./customer.new.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
    }
    $scope.openUpdateCustomer = function(item){
        $scope.newCustomer = item;
        modal = $modal({
            template: require("./customer.new.modal.html"),
            backdrop: false,
            show: true,
            scope: $scope
        });
    }
	$scope.save = function(){
        if(!$scope.newCustomer.id){
            if(!$scope.newCustomer.tenant){
                tips.danger("请选择机构")
                return;
            }else{
                $scope.newCustomer.tenantId = $scope.newCustomer.tenant.id;
                delete $scope.newCustomer.tenant;
            }
    		customer.saveTenant($scope.newCustomer).then(() => {
    			tips.success("新增成功");
                customerLoad();
                modal.hide();
    		});
        }else{
            customer.updateTenant($scope.newCustomer).then(() => {
                tips.success("修改成功");
                customerLoad();
                modal.hide();
            });
        }

	}
}