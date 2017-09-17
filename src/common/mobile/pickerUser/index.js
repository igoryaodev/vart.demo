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
    controller: function($scope, $modal, mobile, $state) {
      let usersModal = null,
          loadUsers = null;

      $scope.$on("$destroy", function(){
        if(usersModal){
          usersModal.hide();
        }
      });

      $scope.criteria = {
        page: $state.params["page"] || 1,
        Criteria: 0,
        Keyword: $state.params["Keyword"]
      }

      loadUsers = function(){
        mobile.getUsersList($scope.criteria).then(data => {
          $scope.users = data;
        })
      }

      $scope.search = function(){
        $scope.criteria.page = 1;
        loadUsers();
      }
      $scope.chooseUsersModal = function() {
        usersModal = $modal({
          template: require('./search.html'),
          show: true,
          backdrop: false,
          scope: $scope
        });
        $scope.criteria.page = 1;
        loadUsers();
      };
      $scope.pageChange = function (page) {
          $scope.criteria.page = page;
          loadUsers();
      };

      $scope.removePro = function (index) {
          if ($scope.onRemove) {
              $scope.onRemove({
                  users: $scope.ngModel[index]
              });
          }

          $scope.ngModel.splice(index, 1);
      };
      $scope.selectUser = function(user) {
        usersModal.hide();
        if($scope.isSinglePick == true) {
          $scope.ngModel = user;
          // if ($scope.onAdd) {
          //     $scope.onAdd({
          //         pavilion: pav
          //     });
          // }
        }else {
          //多选模式
          $scope.ngModel = $scope.ngModel || [];

          var existing = _.find($scope.ngModel, (a) =>  a.id == user.id );

          if (existing) {
              alert("已添加");
          } else {
              $scope.ngModel.push(user);
              if ($scope.onAdd) {
                  $scope.onAdd({
                      users: user
                  });
              }
          }
        }
      }
    }
  }
}
