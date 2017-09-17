/**
 *  16/4/24.
 */
"use strict";

let _ = require("lodash");

module.exports = function ($scope, $state, $modal, tenant, identity, swal, translate) {

    let groupModal;

    $scope.userAuthorities = tenant.getAllUserAuthorities();

    let id = $state.params["id"];
    if (id > 0) {
        tenant.getUser(id).then(data=> {
            $scope.user = data;

            let auth = $scope.user.authority || [];
            _.each($scope.userAuthorities, a=>a.checked = (auth.indexOf(a.value) > -1));

        });
    } else {
        $scope.user = {
            isEnabled: true,
            isChangingPassword: true,
            type: 1
        };

        _.each($scope.userAuthorities, a=>a.checked = undefined);

    }

    $scope.saveUser = function () {

        $scope.user.authority = _.map($scope.userAuthorities.filter(a=>a.checked), i=>i.value);

        if ($scope.user.isChangingPassword) {
            if ($scope.user.newPassword != $scope.user.newPasswordConfirm) {
                swal.error(translate("profile.passwordNotMatch"));
                return;

            } else {
                $scope.user.password = identity.getHashedPassword($scope.user.newPassword);
            }
        }

        tenant.saveUser($scope.user).then(()=> {
            $state.go("app.tenant_user_list");
        });

    };

    $scope.openGroupModal = function () {
        groupModal = $modal({
            template: require("./group.picker.html"),
            show: true,
            backdrop: false,
            scope: $scope,
            controller: function ($scope) {
                $scope.chooseGroup = function () {
                    tenant.getGroup($scope.groupId).then(g=> {
                        $scope.user.groups = $scope.user.groups || [];
                        $scope.user.groups.push(g);
                        groupModal.hide();
                    });
                };
            }
        });
    };

};
