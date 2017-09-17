"use strict";

module.exports = function($scope,$state,help,swal,translate,tips) {
    $scope.criteria = {
        page: $state.params.page || 1,
        pageSize: 10
    }
    help.getHelpList($scope.criteria).then(data => {
        $scope.messageList = data;
    })
    $scope.delMessage = function($index) {
        swal.confirm(translate("common.confirmToDelete"),function(){
            help.removeHelpNotice($scope.messageList.list[$index].id).then(data => {
                $scope.messageList.list.splice($index,1);
                tips.success("删除成功")
            })
        })
    }
}