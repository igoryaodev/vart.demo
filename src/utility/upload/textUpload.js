/**
 *  14/12/22.
 */
"use strict";

let angular = require("angular");

module.exports = function () {

    return {
        template: require("./textUpload.html"),
        scope: {
            catalog: "=",
            ngModel: "="
        },
        controller: function (QINIU_UPLOAD, $scope, Upload, uploadResource, $timeout,basepath) {

            $scope.ngModel = $scope.ngModel || [];

            //preview style

            $scope.upload = function (files) {

                angular.forEach(files, function (file) {

                    uploadResource.getUploadToken($scope.catalog, file.name).then(uploadToken => {

                        Upload.upload({
                            url: QINIU_UPLOAD,
                            file: file,
                            data: {
                                token: uploadToken.token,
                            }

                        }).progress(evnt => {

                            file.progress = parseInt(100.0 * evnt.loaded / evnt.total);
                            changeProgress();

                        }).success(data => {
                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);
                            $scope.ngModel.push({
                                key : basepath+data.key,
                                name : file.name,
                                time : new Date()
                            });
                        }).error(() => {

                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);

                            alert("上传失败");
                        });

                    });

                });
               

                function changeProgress() {

                    var progress = 0;

                    for (var i = 0; i < files.length; i++) {
                        progress += files[i].progress / files.length;
                    }

                    $scope.progress = $scope.progress || {};
                    $scope.progress.width = parseInt(progress) + "%";
                    if ($scope.done >= files.length) {
                        $timeout(() => {
                            delete $scope.progress
                        }, 1000);
                    }
                }

            };

            $scope.remove = function (index) {
                $scope.ngModel.splice(index, 1);
            };
        }

    };
};