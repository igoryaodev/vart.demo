/**
 *  15/12/30.
 */
"use strict";


module.exports = function (notification, $state, $scope) {

    var page = $state.params["page"] > 0 ? $state.params["page"] : "1";
    notification.getNotifications(page).then(function (d) {
        $scope.notifications = d;
        $scope.selected = $scope.notifications.list[0];
    });

    $scope.pageChange = function (page) {
        $state.go($state.current, {
            page: page
        });
    };

    $scope.select = function (n) {
        if (n.isRead == false) {
            notification.read(n.id).then(function () {
                n.isRead = true;
            });
        }

        $scope.selected = n;
    };
};