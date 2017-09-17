module.exports = function ($scope, $state, identity) {

    if ($state.params["r"]) {

        identity.getEmailCheckEntry($state.params["r"]).then(data => {
            $scope.email = data.email;
            $scope.r = $state.params["r"];
        }, () => {
            $state.go("login.login");
        });
    } else {
        $state.go("login.login");
    }


    $scope.submit = function () {
        if ($scope.confirmPassword != $scope.newPassword) {
            alert("两次输入的密码不一致，请重试");
        } else {
            identity.resetPwd($scope.newPassword, $scope.r).then(() => {
                alert("密码修改成功");
                $state.go("login.login");
            });
        }
    }

};
