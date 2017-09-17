"use strict";

module.exports = function($scope,$state,tips,swal,translate,authority) {
  let rightId = [];
  authority.getUserList().then(data => {
    $scope.userList = data;
  });
  authority.getRole().then(data => {
    $scope.roleList = data;
  })

  $scope.selectUser = function($item) {
    $scope.userParams = {
      userID: $item ? $item.id : ""
    };
    if($scope.userParams.userID) {
      authority.getUserRole($scope.userParams.userID).then(data => {
        angular.forEach($scope.roleList, function(list) {
          list.isChecked = false;
        });
        if(data) {
          angular.forEach(data,function(item){
            item.isChecked = true;
          });
        }
        angular.forEach($scope.roleList,function(level){
          angular.forEach(data,function(nLevel){
            if(level.Id == nLevel.roleID) {
              level.isChecked = nLevel.isChecked;
            }
          })
        });
      })
    }
  }
  $scope.save = function() {
    if(!$scope.userParams || !$scope.userParams.userID) {
      tips.danger('authority.pleaseSelectUser');
      return false;
    }
    rightId = [];
    const checkedRole = angular.element(".role-list").find("input[type=checkbox]:checked");
    angular.forEach(checkedRole,function(role){
      rightId.push($(role).attr("data-id"));
    });
    $scope.userParams.roleIds = rightId;
    authority.addUserRole($scope.userParams).then(data => {
      swal.success(translate("common.success"),function(){
        $state.reload();
      })
    })
  }
}
