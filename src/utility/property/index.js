"use strict";

module.exports = function () {

    return {
        restrict: "E",
        template: require("./index.html"),
        scope: {
            ngModel: "=",
            presetItems: "="
        },
        controller: function ($scope) {

            $scope.addProperty = function (item) {
                $scope.ngModel = $scope.ngModel || [];
                if (item) {
                    $scope.ngModel.push(item);
                } else {

                    $scope.ngModel.push({});
                }
            };

            $scope.removeProperty = function (index) {
                $scope.ngModel.splice(index, 1);
            };
        }
    };


};
