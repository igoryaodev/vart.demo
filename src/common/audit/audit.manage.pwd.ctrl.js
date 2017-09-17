"use strict";

module.exports = function($scope,$state,auditUser,tips,translate) {

  $scope.$on("choosedTenant", function(event, tenant) {
    auditUser.getTenantAccount(tenant.id).then(data => {
      $scope.accounts = data;
    })
  })
  $scope.criteria = {
    password: '123456'
  }
  $scope.resetPwd = function(item) {
    $scope.criteria.id = item.id;
    auditUser.resetTenantAccount($scope.criteria).then(data => {
      tips.success('重置成功');
    })
  }
}
