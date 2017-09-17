module.exports = function ($scope, identity) {

    $scope.submit = function () {
        $scope.loading = true;
        identity.retrievePwd($scope.email).then(() => {
            $scope.email = undefined;
            $scope.loading = false;
            $scope.complete = true;
        });
    }
};