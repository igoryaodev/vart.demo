"use strict";

let angular = require("angular");
module.exports = angular.module("wechat",[
	require("./customer")
])
.config($translateProvider => {
	$translateProvider.translations("zh_CN", require("./zh.json"));
	$translateProvider.translations("en_US", require("./en.json"));
})
.name;