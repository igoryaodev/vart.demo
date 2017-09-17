"use strict";

module.exports = function($scope,$state,authority, tips,swal,translate,identity){
  $scope.tenantUser = {
    username: "",
    password: ""
  }
  $scope.save = function(){
    if(!$scope.tenantUser.tenant) {
      tips.danger('authority.pleaseSelectTenant');
      return false;
    }
    $scope.tenantUser.tenantId = $scope.tenantUser.tenant.id;
    $scope.tenantUser.password = identity.getHashedPassword($scope.tenantUser.password);
    authority.addTenantUser($scope.tenantUser).then(data => {
      swal.success(translate("common.success"),function(){
        $state.reload();
      })
    })
  }
}
