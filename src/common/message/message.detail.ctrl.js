"use strict";

module.exports = function($scope,$state,message,swal,translate,tips) {
    $scope.criteria = {
        page: $state.params.page || 1,
        pageSize: 10
    }
    message.getMessageList($scope.criteria).then(data => {
        $scope.messageList = data;
    })
    $scope.select = function (n) {
        $scope.selected = n;
    };
}