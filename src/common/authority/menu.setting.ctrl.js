
"use strict";

module.exports = function ($rootScope, $scope, $state, $element, identity, menu, $modal, swal, tips) {
	let modal;
	let menus = function(){
		menu.getMenus($rootScope.G.auth.id).then(data => {
			$scope.menu = data;
		});
	}
	menus();
	 // menu.getUserMenu($rootScope.G.auth.id).then(data => {
  //     $scope.menu = data;
  //   });
  	$scope.remove = function(ids){
		swal.warning('删除',function(){
			menu.removeMenus(ids).then(() => {
				tips.success('删除成功');
				menus();
			});
		})
	}

	 

};