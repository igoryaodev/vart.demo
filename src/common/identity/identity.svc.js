/**
 *  15/7/14.
 */
"use strict";

let jsSHA = require("jssha");

module.exports = function (API, $http, $rootScope, $state) {

    let getHashedPassword = function (password) {
        var sha1 = new jsSHA("SHA-1", "TEXT");
        sha1.update("vart:" + password);
        return sha1.getHash("HEX");
    };

    return {
        getHashedPassword: getHashedPassword,

        login: function (username, password) {
            return $http.post(API + "/login", {
                username: username,
                plainPassword: password,
                password: getHashedPassword(password)
            },{
                headers: {
                    'Authorization': ''
                }
            }).then(res => {
                $rootScope.G.auth = res.data;
                window.localStorage.setItem("auth", JSON.stringify(res.data));
                return res.data
            });
        },

        logout: function () {

            window.localStorage.removeItem("auth");
            $rootScope.G.auth = {};
            $state.go("login.login", {reload: true});
        },

        retrievePwd: function (email) {
            return $http.get(API + "/resetpassword?email=" + email).then(res => {
                return res.data;
            });
        },

        getEmailCheckEntry: function (r) {
            return $http.get(API + "/checkemail?r=" + r).then(res => {
                return res.data;
            });
        },

        resetPwd: function (pwd, r) {
            return $http.post(API + "/resetpassword", {
                pwd: getHashedPassword(pwd),
                r: r
            }).then(res => {
                return res.data;
            });
        },

        changePwd: function (oldPwd, newPwd) {
            return $http.post(API + "/changepassword", {
                oldPassword: getHashedPassword(oldPwd),
                newPassword: getHashedPassword(newPwd)
            }).then(res => {
                return res.data;
            });
        },

        signUp: function (info) {
            info.password = getHashedPassword(info.password);
            info.confirmPassword = undefined;
            return $http.post(API + "/signup", info).then(res => {
                return res.data;
            });
        },

        isUsernameAvailable: function (username) {
            return $http.get(API + "/username-available?username=" + username).then(res => {
                return res.data;
            });
        },

        getAuthorities: function () {
            return $http.get(API + "/authorities").then(res=>res.data);
        }
    };
};