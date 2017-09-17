/**
 *  14/12/22.
 */
"use strict";

let angular = require("angular");

module.exports = function () {

    return {
        template: require("./videoSlideUpload.html"),
        scope: {
            catalog: "=",
            ngModel: "=",
            limitWidth: "=",
            limitHeight: "="
        },
        controller: function (QINIU_UPLOAD, $scope, Upload, uploadResource, $timeout) {

            $scope.ngModel = $scope.ngModel || [];

            //preview style
            if ($scope.width > 0 && $scope.height > 0) {
                $scope.constraint = $scope.width + "x" + $scope.height;
            } else {
                $scope.constraint = "不限定尺寸";
            }

            $scope.upload = function (files) {

                angular.forEach(files, function (file) {
                    uploadResource.getUploadToken($scope.catalog, file.name).then(uploadToken => {

                        Upload.upload({
                            url: QINIU_UPLOAD,
                            file: file,
                            data: {
                                token: uploadToken.token
                            }

                        }).progress(evnt => {

                            file.progress = parseInt(100.0 * evnt.loaded / evnt.total);
                            changeProgress();

                        }).success(data => {
                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);

                            if ($scope.limitWidth > 0 && $scope.limitHeight > 0 && (data.w != $scope.limitWidth || data.h != $scope.limitHeight)) {
                                alert(`图片尺寸要求为${$scope.limitWidth}x${$scope.limitHeight}，实际上传为${data.w}x${data.h}`);
                            } else {
                                $scope.ngModel.push({
                                    key: data.key,
                                    height: 450,
                                    width: 800
                                });
                            }

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