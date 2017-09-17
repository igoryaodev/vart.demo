"use strict";
const _ = require("lodash");

module.exports = function($scope,$state,translate,tips,swal,authority,$modal) {
  let rightId = [];
  authority.getRole().then(data => {
    $scope.roleList = data;
  })
  authority.getMenu().then(data => {
    $scope.list = data;
  })
  $scope.checkItem = function(id) {
    rightId = [];
    const _this = angular.element('input[type=checkbox][data-id='+id+']');
    const _boxChild = _this.closest('li').find("input[type=checkbox]");
    const parentId = _this.attr("data-parentId");
    const _boxParent = _this.closest(".rights-tree").find('input[type=checkbox][data-id='+parentId+']');
    if(_this.prop("checked")) {

      angular.forEach(_boxChild, function(input) {
        $(input).prop("checked", true);
      })
      if(_boxParent.length>0) {
        _boxParent.prop("checked",true);
        if (_boxParent.attr("data-parentId")) {
          _this.closest(".rights-tree").find('input[type=checkbox][data-id='+_boxParent.attr("data-parentId")+']').prop("checked",true);
        }
      }
    }else {
      angular.forEach(_boxChild, function(input) {
        $(input).prop("checked", false);
      });
    };
  };
  $scope.selectRole = function($item) {
    $scope.roleParams = {
      roleID: $item?$item.Id:""
    }
    if($scope.roleParams.roleID) {
      authority.getRoleMenu($scope.roleParams.roleID).then(data => {
        angular.forEach($scope.list, function(list) {
          list.isChecked = false;
          if(list.Childs && list.Childs.length>0) {
            angular.forEach(list.Childs,function(subList) {
              subList.isChecked = false;
              if (subList.Childs && subList.Childs.length > 0) {
                angular.forEach(subList.Childs,function(third){
                  third.isChecked = false;
                })
              }
            })
          }
        });
        if(data) {
          angular.forEach(data,function(item){
            item.isChecked = true;
            if(item.Childs && item.Childs.length>0) {
              angular.forEach(item.Childs, function(sub) {
                sub.isChecked = true;
                if (sub.Childs && sub.Childs.length > 0) {
                  angular.forEach(sub.Childs,function(tsub){
                    tsub.isChecked = true;
                  })
                }
              })
            }
          });
        }
        angular.forEach($scope.list,function(level){
          angular.forEach(data,function(nLevel){
            if(level.id == nLevel.id) {
              level.isChecked = nLevel.isChecked;
              if(level.Childs&&level.Childs.length>0&&nLevel.Childs&&nLevel.Childs.length>0) {
                angular.forEach(level.Childs,function(lChild){
                  angular.forEach(nLevel.Childs,function(nChild){
                    if (lChild.id == nChild.id) {
                      lChild.isChecked = nChild.isChecked;
                      if (lChild.Childs && lChild.Childs.length > 0 && nChild.Childs&&nChild.Childs.length>0) {
                        angular.forEach(lChild.Childs,function(thirdLevel){
                          angular.forEach(nChild.Childs, function(nthirdLevel){
                            if (thirdLevel.id == nthirdLevel.id) {
                              thirdLevel.isChecked = nthirdLevel.isChecked;
                            }
                          })
                        })
                      }
                    }
                  })
                })
              }
            }
          })
        });

      })
    }
  }
  // 保存
  $scope.save = function() {
    if(!$scope.roleParams || !$scope.roleParams.roleID) {
      tips.danger('authority.pleaseSelectRole');
      return false;
    };
    const checkdMenu = angular.element(".rights-tree").find('input[type=checkbox]:checked');
    angular.forEach(checkdMenu,function(menu) {
      rightId.push($(menu).attr("data-id"));
    })
    $scope.roleParams.menuIds = rightId;
    authority.addRoleMenu($scope.roleParams).then(data => {
      swal.success(translate("common.success"),function() {
        window.location.reload();
      })
    })
  }
  // 新增角色
  let modal;
  $scope.roleModal = function(){
    modal = $modal({
      template: require('./rights.add.role.html'),
      show: true,
      scope: $scope,
      backdrop: false
    });
    $scope.addRole = {}
  }
  $scope.saveRole = function(){
    authority.addRole($scope.addRole).then(data => {
      modal.hide();
      tips.success('authority.newRole');
      $scope.roleList.push(data);
    })
  }
}
