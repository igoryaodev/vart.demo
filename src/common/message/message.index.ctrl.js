"use strict";

module.exports = function($scope,$state,message,tips) {
    if($state.params.id) {
        message.getMessageById($state.params.id).then(data => {
            $scope.notice = data;
        })
    }
    $scope.saveMessage = function(){
        if($state.params.id) {
            message.editMessageNotice($scope.notice).then(data => {
                tips.success("修改成功")
                $state.go("app.message_list");
            })
        }else {
            message.addMessageNotice($scope.notice).then(data => {
                tips.success("保存成功")
                $state.go("app.message_list");
            })
        }
    }
}