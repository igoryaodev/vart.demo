"use strict";

module.exports = function($scope,$state,message,swal,translate,tips) {
    $scope.criteria = {
        page: $state.params.page || 1,
        pageSize: 10
    }
    message.getMessageList($scope.criteria).then(data => {
        $scope.messageList = data;
    })
    $scope.delMessage = function($index) {
        swal.confirm(translate("common.confirmToDelete"),function(){
            message.removeMessageNotice($scope.messageList.list[$index].id).then(data => {
                $scope.messageList.list.splice($index,1);
                tips.success("删除成功")
            })
        })
    }
    $scope.sendMessage = function(id) {
        message.sendMessage({messageId: id}).then(data => {
            tips.success("发送成功");
        })
    }
}