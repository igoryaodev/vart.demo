/**
 *  16/3/23.
 */
"use strict";
let angular = require("angular");

module.exports = function ($scope, $state, tenant, swal, translate) {

    $scope.criteria = {
        page: $state.params["page"] || 1,
        name: $state.params["name"]
    };

    tenant.getUsers($scope.criteria).then(d => {
        $scope.users = d;
    });

    $scope.search = function () {
        $scope.criteria.page = 1;
        $state.go($state.current, $scope.criteria, {reload: true});
    };

    $scope.deleteUser = function ($index) {

        swal.confirm(translate("common.confirmToDelete"), function () {
            let u = $scope.users.list[$index];
            tenant.deleteUser(u.id).then(function () {
                $scope.users.list.splice($index, 1);
            });
        });

    };

};