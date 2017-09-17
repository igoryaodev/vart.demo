"use strict";

module.exports = function($scope, $state, customer, tips){
	$scope.tenant = {
            	title: "VART",
            	theme: "theme01",
                logo:  "http://7xkcpc.com2.z0.glb.qiniucdn.com/pgc/richtext/921281813fe247e39aec95ac1a6e12dd.png#612|194",
                fontColor: "#ed3024",
                buttonColor: "#ed3024",
                iconColor: "#ed3024",
                hrColor: "#888",
                headMenus: [
                	{
                		isEnable:true,
                		menuName:"票务活动",
                		nameCode:"common.shop",
                		navigateUrl:"无",
                		sort:1
                	},
                	{
                		isEnable:true,
                		menuName:"票务活动",
                		nameCode:"common.shop",
                		navigateUrl:"无",
                		sort:2
                	}
                ]
            }
	$scope.save = function(){
		customer.saveTenant($scope.tenant).then(() => {
			tips.success("成功");
		})
	}
	customer.getTenant(1).then(data => {
		$scope.tenants = data;
	})
}