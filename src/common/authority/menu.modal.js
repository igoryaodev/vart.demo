"use strict";

 module.exports = function(){
 	return{
 		restrict: "A",
 		scope: {
 			menuModal: "=",
 			parentId: "=",
 			menuType: "="
 		},
 		controller: function($scope, $modal, $state, $element, menu, tips, swal){
 			let modal = null;
 			$element.click(function(){
 				$scope.menuProps = $scope.menuModal || {};
 				$scope.menuProps.isEnable ? 0 : $scope.menuProps.isEnable = true;
 				$scope.menuProps.description ? $scope.menuProps.description :  $scope.menuProps.description = '无';
 				$scope.menuProps.navigateUrl ? $scope.menuProps.navigateUrl : $scope.menuProps.navigateUrl = '无';
 				modal = $modal({
 					template: require("./menu.modal.html"),
 					scope: $scope,
 					show: true,
 					backdrop: false
 				});
 			});
			$scope.save = function(){

				$scope.menuProps.parentID = $scope.parentId;
				if($scope.menuType == 1){ //1 ：新增   2: 编辑
					menu.newMenus($scope.menuProps).then(() => {
						tips.success("新增成功");
						modal.hide();
						$state.reload();
					});
				}else{
					menu.editMenus($scope.menuProps).then(() => {
						tips.success("编辑成功");
						modal.hide();
						$state.reload();
					});
				}
			}
		

 		}
 	}
 }