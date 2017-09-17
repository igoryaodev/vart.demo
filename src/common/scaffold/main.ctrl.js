/**
 *  15/7/14.
 */
"use strict";

module.exports = function ($rootScope, $scope, $state, $element, identity, menu,$translate) {

    $scope.$state = $state;
    menu.getUserMenu($rootScope.G.auth.id).then(data => {
      $scope.menu = data;
    })
    // menu(menuData=> {
    //     $scope.menu = menuData
    // });

    // $scope.$on("vart.languageChanged", ()=> {
    //
    // });
    $element.ready(function () {
        require("admin-lte/dist/js/app.js");
    });

    $scope.logout = function () {
        identity.logout();
    };

    $scope.isActive = function (menu) {
      const name = $state.current.name;
      if(menu.Childs && menu.Childs.length>0) {
        return menu.Childs.some(e => {
          return $scope.isActive(e);
        })
      } else {
        if(menu.navigateUrl) {
          return menu.navigateUrl == name;
        }else {
          return false;
        }
      }
        // if (menu.Childs) {
        //
        //     return menu.Childs.some(e=> {
        //         console.log($state.current.name);
        //         return e.navigateUrl == $state.current.name;
        //     });
        //
        // }
        // else {
        //
        //     if (menu.active) {
        //         return menu.active.test($state.current.name);
        //     } else {
        //         return false;
        //     }
        // }
    };

    $scope.getUrl = function (mi) {
        if (mi.navigateUrl) {
            return $state.href(mi.navigateUrl, mi.stateParams, {
                reload: true,
                inherit: false
            });
        } else {
            return "#";
        }
    }

};
