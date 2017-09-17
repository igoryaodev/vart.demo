"use strict";

let angular = require("angular");

module.exports = angular.module("common.mobile", [])
	.factory("mobile", require("./mobile.svc"))
	.directive("pickerUser", require("./pickerUser"))
	.config(function($stateProvider){
		$stateProvider
			.state("app.mobile_master", {
				abstract: true,
				template: require("./mobile.master.html")
			})
			.state("app.mobile_black_user", {
				parent: "app.mobile_master",
				url: "/mobile/black/user?page&Keyword",
				template: require("./mobile.black.user.list.html"),
				controller: require("./mobile.black.user.list.ctrl")
			})
			.state("app.mobile_users_list", {
				parent: "app.mobile_master",
				url: "/mobile/users?page&Criteria&Keyword",
				template: require("./mobile.users.list.html"),
				controller: require("./mobile.users.list.ctrl")
			})
			.state("app.mobile_black_words", {
				parent: "app.mobile_master",
				url: "/mobile/words?page&Criteria&Keyword",
				template: require("./mobile.words.list.html"),
				controller: require("./mobile.words.list.ctrl")
			})
	})
	.config(function($translateProvider){
		$translateProvider.translations("zh_CN", require("./zh.json"))
		$translateProvider.translations("en_US", require("./en.json"))
	})
	.name;