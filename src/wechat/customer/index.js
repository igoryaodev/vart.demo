"use strict";

let angular = require("angular");
module.exports = angular.module("wechat.customer",[])
.factory("customer", require("./customer.svc"))
.filter("theme",function(){
	return function(value){
		switch (value){
			case 'theme01':
				return 'vartone';
			case 'theme02':
				return '余德耀';
			case 'theme03':
				return '艺仓';
			case 'theme04':
				return 'vartone02';
			case 'theme05':
				return 'vartone03';
		}	
	}
})
.config($stateProvider => {
	$stateProvider
		.state("app.wechat_master",{
			abstract: true,
			template: require("./customer.master.html"),
			controller: require("./customer.master.ctrl")
		})
		.state("app.wechat_customer_list",{
			parent: "app.wechat_master",
			url: "/customer/list",
			template: require("./customer.list.html"),
			controller: require("./customer.list.ctrl")
		})
		.state("app.wechat_customer_index",{
			url: "/customer/index?id",
			template: require("./customer.index.html"),
			controller: require("./customer.index.ctrl")
		})
		.state("app.wechat_tenant",{
			parent: "app.wechat_master",
			url: "/wechat/tenant",
			template: require("./wechat.tenant.html"),
			controller: require("./wechat.tenant.ctrl")
		})
		.state("app.wechat_profile",{
			parent: "app.wechat_master",
			url: "/wechat/profile",
			template: require("./wechat.profile.html"),
			controller: require("./wechat.profile.ctrl")
		})
		.state("app.wechat_test",{
			parent: "app.wechat_master",
			url: "/wechat/test",
			template: require("./wechat.test.html"),
			controller: require("./wechat.test.ctrl")
		})
})
.name;