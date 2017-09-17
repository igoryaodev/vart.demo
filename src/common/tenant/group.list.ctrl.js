/**
 *  16/4/22.
 */
"use strict";

let angular = require("angular");

module.exports = function ($scope, tips, $modal, tenant, swal, translate) {

    let editModal, editingIndex;

    tenant.getGroups().then(data=> {
        $scope.groups = data;
    });

    $scope.newGroup = function () {
        $scope.group = {};
        openEditModal();
    };

    $scope.editGroup = function ($index) {
        editingIndex = $index;
        $scope.group = angular.copy($scope.groups[$index]);
        openEditModal();
    };

    $scope.saveGroup = function () {

        tenant.saveGroup($scope.group).then(d=> {
            if ($scope.group.id > 0) {
                $scope.groups[editingIndex] = d;
            } else {
                $scope.groups.push(d);
            }

            editModal.hide();
            tips.success('orgnization.groupSaved');
        });
    };

    $scope.deleteGroup = function ($index) {

        swal.confirm(translate("common.confirmToDelete"), function () {
            let group = $scope.groups[$index];
            tenant.deleteGroup(group.id).then(()=> {
                $scope.groups.splice($index, 1);
            });
        });
    };

    $scope.addUserToGroup = function () {
        $scope.group.newUser = "";
    };

    function openEditModal() {
        editModal = $modal({
            template: require("./group.edit.html"),
            show: true,
            backdrop: false,
            scope: $scope
        });
    }
};