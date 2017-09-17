"use strict";

module.exports = function($scope,$state,help,swal,translate,tips) {
    $scope.criteria = {
        page: $state.params.page || 1,
        pageSize: 10
    }
    help.getHelpList($scope.criteria).then(data => {
        $scope.messageList = data;
    })
    $scope.select = function (n) {
        $scope.selected = n;
    };
}