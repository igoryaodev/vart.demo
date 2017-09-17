
"use strict";

let angular = require("angular");
    // type=window.localStorage.getItem('authType');

module.exports = function ($httpProvider, $locationProvider, $urlRouterProvider, $anchorScrollProvider, cfpLoadingBarProvider, CacheFactoryProvider) {

    cfpLoadingBarProvider.includeSpinner = false;

    //全局错误
    $httpProvider.interceptors.push(function ($q, $rootScope, swal) {

        return {
            responseError: function (res) {

                if (res && res.data) {

                    if (res.data.status == 401) {

                        // window.localStorage.removeItem("auth");
                        $rootScope.$broadcast("loginRequired");

                    } else if (res.data.message) {
                        swal.error(res.data.message);
                    } else {
                        swal.error("出错了");
                    }
                }

                return $q.reject(res);
            }
        };
    });
    angular.extend(CacheFactoryProvider.defaults, {maxAge: 15 * 60 * 1000});
    // !type ? type=0 : type;
    // switch(type){
    //     case 0:
    //         $urlRouterProvider.otherwise("/profile");
    //         break;
    //         
    //     case '1':
    //         $urlRouterProvider.otherwise("/trades/add");
    //         break;
    //     case '2':
    //         $urlRouterProvider.otherwise("/trades/add");
    //         break;
    //     case '3':
    //         $urlRouterProvider.otherwise("/activities");
    //         break;
    //     case '4':
    //         $urlRouterProvider.otherwise("/activities");
    //         break;
    // }
    // $urlRouterProvider.otherwise("/trades/add");
    // $urlRouterProvider.otherwise("/activities");
    //$urlRouterProvider.otherwise("/trades/add");
    // $urlRouterProvider.otherwise("/login");
    $urlRouterProvider.otherwise("/customer/list");
    $locationProvider.html5Mode(true);

    $anchorScrollProvider.disableAutoScrolling();

};
