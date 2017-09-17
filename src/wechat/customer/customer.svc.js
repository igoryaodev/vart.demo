"use strcit";

module.exports = function(API, API_CRM, CacheFactory, $q, $http, $httpParamSerializer){
	return {
		getTenant: function(id){
			return $http.get(API + "/mallFirstStyle/" + id).then(res => res.data);
		},
		saveTenant: function(criteria){
			return $http.post(API + "/mallFirstStyle", criteria).then(res => res.data);
		},
		updateTenant: function(criteria){
			return $http.put(API + "/mallFirstStyle", criteria).then(res => res.data);
		},
		getCustomerList: function(){
			return $http.get(API + "/mallFirstStyle").then(res => res.data);
		},
		removeCustomerList: function(id){
			return $http.delete(API + "/mallFirstStyle?ids=" + id).then(res => res.data);
		},
		getProfile: function(id){
			return $http.get(API + "/mallSecondStyle?tenantId=" + id).then(res => res.data);
		},
		saveProfile: function(criteria){
			return $http.post(API + "/mallSecondStyle", criteria).then(res => res.data);
		},
		removeProfile: function(id){
			return $http.delete(API + "/mallSecondStyle?ids=" + id).then(res => res.data);
		},
		updateProfile: function(criteria){
			return $http.put(API + "/mallSecondStyle", criteria).then(res => res.data);
		},
		getMemberShip: function(id){
			return $http.get(API + "/mallThirdStyle?tenantId=" + id).then(res => res.data);
		},
		saveMemberShip: function(criteria){
			return $http.post(API + "/mallThirdStyle", criteria).then(res => res.data);
		},
		updateMemberShip: function(criteria){
			return $http.put(API + "/mallThirdStyle", criteria).then(res => res.data);
		},
		removeMemberShip: function(id){
			return $http.delete(API + "/mallThirdStyle?ids=" + id).then(res => res.data);
		},
		wechatTheme: [
			{
				id:0,
				theme: "theme01",
				name: "vartone"
			},
			{
				id:1,
				theme: "theme02",
				name: "余德耀"
			},
			{
				id:2,
				theme: "theme03",
				name: "艺仓"
			},
			{
				id:3,
				theme: "theme04",
				name: "vartone02"
			},
			{
				id:4,
				theme: "theme05",
				name: "vartone03"
			},
			{
				id: 5,
				theme: "theme06",
				name: "UCCA"
			}
		],
		wechatProductMenus: [
			{
				id:1,
				isEnable:true,
        		menuName:"票务",
        		nameCode:"home.ticket",
        		navigateUrl:"ticket_list",
        		sort:1
			},
			{
				id:2,
				isEnable:true,
        		menuName:"购票",
        		nameCode:"home.buyTicket",
        		navigateUrl:"product_list",
        		sort:2
			},
			{
				id: 3,
				isEnable: true,
				menuName: "演出",
				nameCode: "product.performance",
				navigateUrl: "product_list_performance",
				sort: 3
			},
			{
				id: 4,
				isEnable:true,
        		menuName:"会员",
        		nameCode:"product.member",
        		navigateUrl:"product_list_member",
        		sort: 4
			},
			{
				id: 5,
				isEnable:true,
        		menuName:"活动",
        		nameCode:"home.activity",
        		navigateUrl:"product_list_activity",
        		sort: 5
			},
			{
				id: 6,
				isEnable:true,
        		menuName:"商店",
        		nameCode:"product.shop",
        		navigateUrl:"product_list_shop",
        		sort: 6
			},
			{
				id: 7,
				isEnable: true,
				menuName: "代售",
				nameCode: "product.agent",
				navigateUrl: "agent.list",
				sort: 7
			},
			{
				id: 8,
				isEnable: true,
				menuName: "新活动",
				nameCode: "home.activity",
				navigateUrl: "ticket_activity_list",
				sort: 8
			},
			{
				id: 9,
				isEnable: true,
				menuName: "实物票",
				nameCode: "entities.ticket",
				navigateUrl: "entities_list",
				sort: 9
			}
		],
		wechatProfileMenus: [
			{
				id:0,
				isEnable:true,
        		menuName:"成为会员",
        		nameCode:"member.member",
        		navigateUrl:"profile_member",
        		sort:1
			},
			{
				id:1,
				isEnable:true,
        		menuName:"完善信息",
        		nameCode:"member.fullprofile",
        		navigateUrl:"profile_list",
        		sort:2
			},
			{
				id:2,
				isEnable:true,
        		menuName:"优惠券",
        		nameCode:"member.coupon",
        		navigateUrl:"profile_coupon_use",
        		sort:3
			},
			{
				id:3,
				isEnable:true,
        		menuName:"积分",
        		nameCode:"member.integral",
        		navigateUrl:"profile_integral",
        		sort:4
			},
			{
				id:4,
				isEnable:true,
        		menuName:"二维码",
        		nameCode:"member.qrcode",
        		navigateUrl:"profile_qrcode",
        		sort:5
			}
		],
	}
}