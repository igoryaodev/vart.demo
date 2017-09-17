/**
 *  14/12/22.
 */
"use strict";

module.exports =  function () {

    return {
        template: require("./imgFixUpload.html"),
        scope: {
            catalog: "=",
            ngModel: "=",
            limitWidth: "=",
            limitHeight: "="
        },
        controller: function (QINIU_UPLOAD, $scope, Upload, uploadResource, $filter, $timeout) {

            $scope.ngModel = $scope.ngModel || {};

            //preview style
            $scope.style = {};
            if ($scope.limitWidth > 0 && $scope.limitHeight > 0) {
                $scope.style.width = $scope.limitWidth;
                $scope.constraint = $scope.limitWidth + "x" + $scope.limitHeight;
            } else {
                $scope.constraint = "不限定尺寸";
            }

            $scope.upload = function (file) {

                if (file) {
                    uploadResource.getUploadToken($scope.catalog, file.name).then(uploadToken => {

                        Upload.upload({
                            url: QINIU_UPLOAD,
                            file: file,
                            data: {
                                token: uploadToken.token
                            }
                        }).progress(evnt => {
                            $scope.progress = $scope.progress || {};
                            $scope.progress.width = parseInt(100.0 * evnt.loaded / evnt.total) + "%";

                        }).success(data => {

                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);

                            if ($scope.limitWidth > 0 && $scope.limitHeight > 0 && (data.w != $scope.limitWidth || data.h != $scope.limitHeight)) {
                                alert(`图片尺寸要求为${$scope.limitWidth}x${$scope.limitHeight}，实际上传为${data.w}x${data.h}`);
                            } else {
                                $scope.ngModel = {
                                    key: data.key,
                                    height: data.h,
                                    width: data.w
                                };
                            }

                        }).error(() => {

                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);

                            alert("上传失败");

                        });
                    });
                }
            };


            $scope.getUrl = function () {
                if ($scope.ngModel && $scope.ngModel.key) {
                    return $filter("qiniu")($scope.ngModel.key);
                } else if ($scope.limitWidth > 0 && $scope.limitHeight > 0) {
                    return "http://placehold.it/" + $scope.limitWidth + "x" + $scope.limitHeight;
                } else {
                    return "http://placehold.it/200x200&text=Any";
                }
            };
        }

    };
};