"use strict";

module.exports = function ($scope, $window, identity) {
    $scope.step = 1;
    $scope.info = {};

    $scope.submit = function () {

        if ($scope.info.logoImage == undefined || $scope.info.logoImage.key == undefined) {
            $window.alert("请上传LOGO");
            return false;
        }

        identity.signUp($scope.info).then(()=> {
            $scope.step = 3;
        });
    };

    $scope.next = function () {

        if ($scope.info.password != $scope.info.confirmPassword) {
            alert("两次输入的密码不一致");
        } else {
            identity.isUsernameAvailable($scope.info.email).then(data => {
                if (Boolean(data)) {
                    $scope.step = 2;
                } else {
                    alert("该邮箱地址已被注册，请换一个再试");
                }
            });
        }
    };
};