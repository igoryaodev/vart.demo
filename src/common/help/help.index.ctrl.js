"use strict";

module.exports = function($scope,$state,help,tips) {
    if($state.params.id) {
        help.getHelpById($state.params.id).then(data => {
            $scope.notice = data;
        })
    }
    $scope.saveMessage = function(){
        if($state.params.id) {
            help.editHelpNotice($scope.notice).then(data => {
                tips.success("修改成功")
                $state.go("app.help_list");
            })
        }else {
            help.addHelpNotice($scope.notice).then(data => {
                tips.success("保存成功")
                $state.go("app.help_list");
            })
        }
    }
}