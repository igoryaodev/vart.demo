"use strict";

module.exports = function() {
  return {
    restrict: 'E',
    template: require('./index.html'),
    scope: {
      ngModel: '=',
      isSinglePick: '=?',
      onAdd: '&',
      onRemove: '&'
    },
    controller: function($scope,$modal,authority) {
      let tenantModal;
      $scope.isSinglePick = true;
      $scope.$on('$destroy', function() {
        if(tenantModal) {
          tenantModal.hide();
        }
      });
      let load = function() {
        authority.getTenantId($scope.criteria).then(data => {
          $scope.tenants = data;
        })
      };
      $scope.chooseTenantModal = function() {
        tenantModal = $modal({
          template: require('./search.html'),
          show: true,
          backdrop: false,
          scope: $scope
        });
        $scope.criteria = {
            page: 1
        };
        load();
      };
      $scope.pageChange = function (page) {
          $scope.criteria.page = page;
          load();
      };
      $scope.search = function() {
        $scope.criteria.page = 1;
        load();
      }
      $scope.confirmTenant = function(pro) {
        tenantModal.hide();
        if($scope.isSinglePick == true) {
          $scope.ngModel = pro;
          $scope.$emit("choosedTenant",pro);
          if ($scope.onAdd) {
              $scope.onAdd({
                  tenant: pro
              });
          }
        }
      }
    }
  }
}
