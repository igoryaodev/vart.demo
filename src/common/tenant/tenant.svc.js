/**
 *  16/3/23.
 */
"use strict";

module.exports = function (API, $http, $httpParamSerializer) {

    return {
        getGroup: function (id) {
            return $http.get(API + "/tenants/groups/" + id).then(res=>res.data);
        },
        getGroups: function () {
            return $http.get(API + "/tenants/groups").then(res=>res.data);
        },
        saveGroup: function (group) {
            return $http.post(API + "/tenants/groups", group).then(res=>res.data);
        },
        deleteGroup: function (id) {
            return $http.delete(API + "/tenants/groups/" + id).then(res=>res.data);
        },
        getUser: function (id) {
            return $http.get(API + "/tenants/users/" + id).then(res => res.data);
        },
        getUsers: function (criteria) {
            return $http.get(API + "/tenants/users?" + $httpParamSerializer(criteria)).then(res=>res.data);
        },
        getAllUsers: function () {
            return $http.get(API + "/tenants/users/all").then(res=>res.data);
        },
        saveUser: function (u) {
            return $http.post(API + "/tenants/users", u).then(res=>res.data);
        },
        deleteUser: function (id) {
            return $http.delete(API + "/tenants/users/" + id).then(res=>res.data);
        },
        getAllUserAuthorities: function () {
            return [{
                value: "Cms",
                name: "CMS - 内容管理"
            }, {
                value: "CrmAccount",
                name: "CRM - 客户管理"
            }, {
                value: "CrmCampaign",
                name: "CRM - 活动管理"
            }];
        },
        customerUrlId: function(){
            return [123, 117, 54, 1, 172, 156, 200];
        },
        customerUrl: function(){
            return [
                {
                    id: 123,
                    name: "艺仓美术馆",
                    url: "http://yicang.vart.cc/member/yicang/"
                },
                {
                    id: 117,
                    name: "余德耀美术馆",
                    url: "http://yuzm.vart.cc/member/yuzm/"

                },
                {
                    id: 54,
                    name: "尤伦斯当代艺术中心",
                    url: "http://wechat.vart.cc/member/ucca/"

                },
                {
                    id: 1,
                    name: "VART私人美术馆",
                    url: "http://vartone.vart.cc/member/vartone/"

                },
                {
                    id: 172,
                    name: "VART私人美术馆",
                    url: "http://shcat.vart.cc/member/shcat/"

                },
                {
                    id: 156,
                    name: "麓湖·A4美术馆",
                    url: "http://a4.vart.cc/member/a4/"

                },
                {
                    id: 200,
                    name: "国家体育场（鸟巢）",
                    url: "http://vartone.vart.cc/member/artpie/"

                }
            ]
        }

    };
};