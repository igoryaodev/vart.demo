/**
 *  14/12/22.
 */
"use strict";

let angular = require("angular");

module.exports = function ($state) {

    return {
        template: require("./index.html"),
        scope: {
            current: "@",
            total: "@",
            records: "=",
            pageChange: "&"
        },
        link: function (scope, ele, attr) {
            scope.gotoPage = scope.current;

            scope.goto = function (page) {
                goto(page);
            };

            scope.next = function () {
                if (Number(scope.current) < Number(scope.total)) {
                    goto(Number(scope.current) + 1);
                }
            };

            scope.prev = function () {
                if (Number(scope.current) > 1) {
                    goto(Number(scope.current) - 1);
                }
            };

            scope.getPageList = function () {

                var current = Number(scope.current);
                var total = Number(scope.total);

                if (current + 2 >= total) {
                    scope.end = total;
                    scope.start = total - 5;
                } else if (current - 2 <= 1) {
                    scope.start = 1;
                    scope.end = 5
                } else {
                    scope.start = current - 2;
                    scope.end = current + 2;
                }

                var list = [];

                for (var i = scope.start; i <= scope.end; i++) {
                    if (i > 1 && i < total) {
                        list.push(i);
                    }
                }

                return list;
            };

            function goto(page) {

                if (attr.pageChange) {
                    scope.pageChange({page: page});

                } else {
                    $state.go($state.current, {page: page});
                }
            }
        }

    };


};