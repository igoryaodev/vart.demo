module.exports = function ($scope, $state, $modal, auditUser) {

    let activateModal;

    $scope.selected = {
        t: 1
    };

    $scope.criteria = {
        page: $state.params["page"] > 0 ? $state.params["page"] : "1",
        name: $state.params['name']
    };

    auditUser.getSignups($scope.criteria).then(data => {
        $scope.signups = data;
    });
    $scope.search = function() {
      $state.go($state.current,$scope.criteria,{reload: true});
    }

    $scope.activate = function () {

        if (activateModal) {
            activateModal.hide();
        }

        auditUser.activateSignup($scope.selected.id, $scope.selected.pavId).then(data => {
            $state.go("app.pavilion_index", {
                id: data.id
            });
        });
    };

    $scope.openActivateModal = function (item) {

        $scope.selected.id = item.id;
        $scope.selectedItem = item;

        activateModal = $modal({
            template: require("./audit.approve.modal.html"),
            show: true,
            scope: $scope,
            backdrop: false
        });
    };

    $scope.focus = function () {
        $scope.selected.t = 2;
    };

};
