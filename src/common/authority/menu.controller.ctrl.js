"use strict";

module.exports= function($scope,$state,authority,tips ,swal,translate,$modal){
  authority.getMenu().then(data => {
    $scope.list = data;
  })
  $scope.showControl = function(item) {
    if (!item.Childs) {
      if ($scope.selectMenuId != item.id) {
        $scope.selectMenuId = item.id;
        authority.getMenuController(item.id).then(data => {
          $scope.ctrlist = data;
        })
      }
    }
  }
  // del controller
  $scope.delMenu = function(ctrl,$index) {
    swal.confirm(translate("common.confirmToDelete"), function() {
      authority.removeMenuController(ctrl.id).then(data => {
        tips.success('common.success');
      $scope.ctrlist.splice($index,1);
      })
    })
  }
  let modal;
  $scope.menuModal = function(ctrl) {
    modal = $modal({
      template: require('./menu.controller.modal.html'),
      show: true,
      scope: $scope,
      backdrop: false
    })
    $scope.isNew = false;
    $scope.menuCtrl = ctrl;
  }
  $scope.addMenuModal = function() {
    modal = $modal({
      template: require('./menu.controller.modal.html'),
      show: true,
      scope: $scope,
      backdrop: false
    })
    $scope.isNew = true;
    $scope.menuCtrl = {};
  }
  // save edit
  $scope.saveEdit = function() {
    authority.editMenuController($scope.menuCtrl).then(data => {
      modal.hide();
      tips.success('common.success');
      authority.getMenuController($scope.selectMenuId).then(data => {
        $scope.ctrlist = data;
      })
    })
  }
  // save
  $scope.save = function() {
    if (!$scope.selectMenuId) {
      tips.danger('authority.pleaseSelectMenu');
      return;
    }
    $scope.menuCtrl.menuID = $scope.selectMenuId;
    authority.addMenuController($scope.menuCtrl).then(data => {
      modal.hide();
      tips.success('common.success');
      authority.getMenuController($scope.selectMenuId).then(data => {
        $scope.ctrlist = data;
      })
    })
  }
}
