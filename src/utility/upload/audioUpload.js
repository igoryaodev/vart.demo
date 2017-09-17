/**
 *  14/12/22.
 */
"use strict";

module.exports = function () {

    return {
        template: require("./audioUpload.html"),
        scope: {
            catalog: "=",
            ngModel: "="
        },
        controller: function ($scope, QINIU_UPLOAD, Upload, uploadResource, $timeout) {

            $scope.ngModel = $scope.ngModel || {};

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

                            $scope.ngModel = {
                                key: data.key
                            };

                        }).error(() => {

                            $timeout(() => {
                                delete $scope.progress;
                            }, 1000);

                            alert("上传失败");
                        });

                    });
                }
            };
        }

    };

};