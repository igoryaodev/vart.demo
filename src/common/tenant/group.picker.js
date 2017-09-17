/**
 *  16/4/24.
 */
"use strict";

require("select2");
require("select2/dist/css/select2.css");

let _ = require("lodash");

module.exports = function (API, $http, $httpParamSerializer) {

    return {
        restrict: "A",
        require: "ngModel",
        link: function ($scope, $element) {

            $element.select2({
                ajax: {
                    url: API + "/tenants/groups",
                    dataType: "json",
                    delay: 250,
                    data: function (params) {
                        return {
                            name: params.term,
                            page: params.page
                        }
                    },
                    transport: function (params, success, failure) {
                        $http.get(params.url + "?" + $httpParamSerializer(params.data)).then(res=> {

                            let list = _.map(res.data, i=> {
                                return {
                                    id: i.id,
                                    text: i.name
                                }
                            });

                            success(list);
                        }, res=> {
                            failure(res.data);
                        });
                    },
                    processResults: function (data) {
                        return {
                            results: data
                        }
                    },
                    cache: true
                },
                escapeMarkup: function (markup) {
                    return markup;
                },
                minimumInputLength: 0
            });
        }
    };

};