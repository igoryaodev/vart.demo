/**
 *  16/3/26.
 */
"use strict";

let _ = require("lodash");

module.exports = function ($scope, $rootScope, $translate, $modal, $state, $element, identity, tenant, swal, translate,authority,message) {

    let changePwdModal;

    $scope.language = {
        key: $translate.use(),
        getDisplayName: function () {
            return $element.find("#language option:selected").text();
        },
        changeLanguage: function () {
            $translate.use(this.key);
            this.isEditing = false;
            // $rootScope.$broadcast("vart.languageChanged");
        }
    };

    //用户权限
    // identity.getAuthorities().then(userAuth=> {
    //     $scope.authorities = [];
    //
    //     let allAuth = tenant.getAllUserAuthorities();
    //     _.map(userAuth, a=> {
    //         let match = _.find(allAuth, e=>e.value == a);
    //         if (match) {
    //             $scope.authorities.push(match.name);
    //         }
    //     });
    // });
    authority.getUserRole($rootScope.G.auth.id).then(data => {
      $scope.authorities = data;
    })
    let messageModal;
    message.getMessageUser().then(data => {
        if(data) {
            $scope.messageNotice = data;
            messageModal = $modal({
                template: require("./release.note.modal.html"),
                show: true,
                scope: $scope,
                backdrop: false
            })
        }
    })
    $scope.saveView = function(){
        message.editMessageUser({messageId: $scope.messageNotice.mesageNoteDto.id}).then(data => {
            messageModal.hide();
        })
    }
    $scope.openChangePwdModal = function () {
        $scope.password = {};
        changePwdModal = $modal({
            template: require("./profile.pwd.html"),
            show: true,
            scope: $scope,
            backdrop: false
        });
    };

    $scope.changePwd = function () {
        if ($scope.password.confirmPassword != $scope.password.newPassword) {
            swal.error(translate("profile.passwordNotMatch"));
        } else {
            identity.changePwd($scope.password.oldPassword, $scope.password.newPassword).then(() => {
                changePwdModal.hide();
                swal.success(translate("profile.passwordChangeSuccess"), function () {
                    identity.logout();
                });
            });
        }
    };

    if ($state.params["pwd"] == 1) {

        swal.warning(translate("profile.pleaseChangePassword"), function () {
            $scope.openChangePwdModal();
        });
    }

};
