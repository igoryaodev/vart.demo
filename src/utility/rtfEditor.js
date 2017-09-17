/**
 *  14/12/22.
 */
"use strict";

let UE = require("ueditor");

module.exports = function ($timeout) {

    return {
        restrict: "E",
        require: "ngModel",
        scope: {
            topOffset: "="
        },
        link: function link(scope, element, attr, ctrl) {
            let _ueditor,
                _ueditorReady = false,
                _content,
                initEditor = function () {
                    let config = {
                        topOffset: scope.topOffset || 0,
                        retainOnlyLabelPasted: true
                    };
                    _ueditor = new UE.ui.Editor(config);
                    _ueditor.render(element[0]);

                    _ueditor.ready(() => {
                        _ueditorReady = true;
                        setContent(_content);

                        _ueditor.addListener("contentChange", () => {
                            ctrl.$setViewValue(_ueditor.getContent());
                        });
                    });
                },
                setContent = function (content) {
                    if (_ueditor && _ueditorReady) {
                        _ueditor.setContent(content);
                    }
                };

            ctrl.$render = function () {
                _content = ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue;
                setContent(_content);
            };

            $timeout(initEditor, 250);

        }

    };

};
