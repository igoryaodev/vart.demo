
module.exports = function($scope, $state, identity) {

    $scope.login = function() {
        $scope.isSending = true;

        identity.login($scope.username, $scope.password).then((data) => {
            !data.type ? '' : window.localStorage.setItem('authType', data.type);
            $scope.isSending = false;
            $state.go("app.profile");
           /* if (data.isChangePasswordRequired == true) {
                $state.go("app.profile", { pwd: 1 });
            } else {
                // $state.go("app.home");
                // $state.go("app.trade_add");
                let type = data.type ? parseInt(data.type) : 0;
                switch (type) {
                    case 1:
                        $state.go('app.trade_add');
                        break;
                    case 2:
                        $state.go('app.trade_add');
                        break;
                    case 3:
                        $state.go('app.activity_list');
                        break;
                    case 4:
                        $state.go('app.activity_list');
                        break;
                    default:
                        $state.go('app.profile');
                }
            }*/
        }, () => {
            $scope.isSending = false;
        });

    }
};
