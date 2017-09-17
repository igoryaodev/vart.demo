/**
 *  16/2/12.
 */
"use strict";
module.exports = function($rootScope,$http,API,translate, identity) {
    return {
      getUserMenu: function(id) {
        return $http.get(API + "/userMenus/"+id).then(res => res.data);
      },
      getMenus: function(id) {
        return $http.get(API + "/menus").then(res => res.data);
      },
      newMenus: function(menus){
        return $http.post(API + "/menus", menus).then(res => res.data);
      },
      editMenus: function(menus){
        return $http.put(API + "/menus", menus).then(res => res.data);
      },
      removeMenus: function(ids){
        return $http.delete(API + "/menus?ids=" + ids).then(res => res.data);
      }
    }
    // return function(callback) {
    //     // userAuth ["Cms", "CrmCampaign", "CrmAccount", "Cms", "CrmCampaign", "CrmAccount"]
    //     // auth.type == 1  admin
    //     // auth.type == 2  商户(普通)
    //     // auth.type == 3  商户管理员
    //     // auth.type == 4  商户（微商城）
    //
    //     identity.getAuthorities().then(userAuth => {
    //         let auth = $rootScope.G.auth || {};
    //
    //         let isAdmin = auth.type == 1,
    //             isTenantUser = auth.type == 2,
    //             isMasterUser = auth.type == 3,
    //             isWeChatShopUser = auth.type == 4,
    //             menu = [];
    //         if (isAdmin) {
    //             menuCms(menu); //CMS
    //             menuCommunity(menu); //社区
    //             menuCrm(menu); //CRM
    //         }
    //         if (isTenantUser || isMasterUser) {
    //             menuCms(menu); //CMS
    //         }
    //
    //         if (isWeChatShopUser||isAdmin) {
    //             menuShop(menu); //shop
    //         }
    //
    //         // if (userAuth.indexOf("CrmAccount") > -1) {
    //         //     menuShop(menu);//shop
    //         // }
    //
    //         if (callback) {
    //             callback(menu);
    //         }
    //         menuConfig(menu); //设置
    //
    //         //CMS
    //         function menuCms(menu) {
    //
    //             let m = {
    //                 name: translate("common.cms"),
    //                 icon: "fa-database",
    //                 subMenu: []
    //             };
    //
    //             m.subMenu.push({
    //                 name: translate("activity.exhibitionManagement"),
    //                 state: "app.activity_list",
    //                 icon: "fa-eye",
    //                 active: /app.(activity|guide)_\w*|app.home/
    //             });
    //
    //             if (isAdmin) {
    //                 m.subMenu.push({
    //                     name: translate("composition.compositionManagement"),
    //                     state: "app.composition_list",
    //                     icon: "fa-th",
    //                     active: /app.composition_\w*/
    //                 });
    //             }
    //             m.subMenu.push({
    //                 name: translate("pavilion.pavilionManagement"),
    //                 state: "app.pavilion_list",
    //                 icon: "fa-university",
    //                 active: /app.pavilion_\w*/
    //             });
    //
    //             // } else {
    //             //     m.subMenu.push({
    //             //         name: translate("pavilion.pavilionManagement"),
    //             //         state: "app.pavilion_list",
    //             //         stateParams: {id: auth.pavilionId},
    //             //         icon: "fa-university",
    //             //         active: /app.pavilion_\w*/
    //             //     });
    //             // }
    //
    //             m.subMenu.push({
    //                 name: translate("artist.artist"),
    //                 state: "app.artist_list",
    //                 icon: "fa-paint-brush",
    //                 active: /app.artist_\w*/
    //             }, {
    //                 name: translate("work.work"),
    //                 state: "app.work_list",
    //                 icon: "fa-image",
    //                 active: /app.work_\w*/
    //             });
    //
    //             if (isAdmin) {
    //                 m.subMenu.push({
    //                     name: translate("ads.advertisement"),
    //                     state: "app.ads_titleads",
    //                     icon: "fa-list-ul",
    //                     active: /app.ads_(titleads|bootscreen)\w*/
    //                 }, {
    //                     name: translate("recommendation.dailyRecommendation"),
    //                     state: "app.ads_homepage",
    //                     icon: "fa-thumbs-o-up",
    //                     active: /app.ads_homepage\w*/
    //                 });
    //             }
    //
    //             if (m.subMenu.length > 0) {
    //                 menu.push(m);
    //             }
    //
    //         }
    //
    //         //社区
    //         function menuCommunity(menu) {
    //
    //             let m = {
    //                 name: "社区管理",
    //                 icon: "fa-group",
    //                 subMenu: []
    //             };
    //
    //             if (isAdmin) {
    //
    //                 m.subMenu.push({
    //                     name: "用户评论",
    //                     state: "app.comment_index",
    //                     icon: "fa-comments",
    //                     active: /app.comment_\w*/
    //                 }, {
    //                     name: "社区管理",
    //                     state: "app.feed_list",
    //                     icon: "fa-rocket",
    //                     active: /app.feed_\w*/
    //                 }, {
    //                     name: "标签",
    //                     state: "app.tag_list",
    //                     icon: "fa-tag",
    //                     active: /app.tag_\w*/
    //                 }, {
    //                     name: "用户",
    //                     state: "app.user_list",
    //                     icon: "fa-user",
    //                     active: /app.user_\w*/
    //                 });
    //             }
    //
    //             if (m.subMenu.length > 0) {
    //                 menu.push(m);
    //             }
    //
    //         }
    //
    //         //CRM
    //         function menuCrm(menu) {
    //
    //             let m = {
    //                 name: translate("common.crm"),
    //                 icon: "fa-fax",
    //                 subMenu: []
    //             };
    //
    //             if (userAuth.indexOf("CrmAccount") > -1) {
    //                 m.subMenu.push({
    //                     name: translate("account.account"),
    //                     icon: "fa-building",
    //                     state: "app.account_list",
    //                     active: /app.account_\w*/
    //                 }, {
    //                     name: translate("contact.contact"),
    //                     icon: "fa-user",
    //                     state: "app.contact_list",
    //                     active: /app.contact_\w*/
    //                 });
    //             }
    //             if (userAuth.indexOf("CrmCampaign") > -1) {
    //                 m.subMenu.push({
    //                     name: translate("campaign.campaign"),
    //                     icon: "fa-bullhorn",
    //                     state: "app.campaign_list",
    //                     active: /app.campaign_\w*/
    //                 }, {
    //                     name: translate("batchmail.batchmail"),
    //                     icon: "fa-envelope",
    //                     state: "app.mail_task_list",
    //                     active: /app.mail\w*/
    //                 });
    //             }
    //
    //             if (m.subMenu.length > 0) {
    //
    //                 menu.push(m);
    //             }
    //         }
    //
    //         //shop
    //         function menuShop(menu) {
    //             let m = {
    //                 name: translate("common.shop"),
    //                 icon: "fa-shopping-cart",
    //                 subMenu: []
    //             };
    //
    //             m.subMenu.push({
    //                 name: translate("trade.reception"),
    //                 icon: "fa-credit-card-alt",
    //                 state: "app.trade_add",
    //                 active: /app.trade\w*/
    //             }, {
    //                 name: translate("order.order"),
    //                 icon: "fa-shopping-bag",
    //                 state: "app.order_list",
    //                 active: /app.order\w*/
    //             }, {
    //                 name: translate("member.member"),
    //                 icon: "fa-diamond",
    //                 state: "app.member_list",
    //                 active: /app.member_\w*/
    //             }, {
    //                 name: translate("coupon.coupon"),
    //                 icon: "fa-gift",
    //                 state: "app.coupon_setting",
    //                 active: /app.coupon_\w*/
    //             }, {
    //                 name: translate("promotion.promotion"),
    //                 icon: "fa-recycle",
    //                 state: "app.promotion_list",
    //                 active: /app.promotion_\w*/
    //             },{
    //                 name: translate("product.product"),
    //                 icon: "fa-tags",
    //                 state: "app.product_list",
    //                 active: /app.product\w*/
    //             }, {
    //                 name: translate("ticket.analytics"),
    //                 icon: "fa-ticket",
    //                 state: "app.ticket_report",
    //                 active: /app.ticket\w*/
    //             });
    //
    //             menu.push(m)
    //         }
    //
    //         //设置
    //         function menuConfig(menu) {
    //
    //             let m = {
    //                 name: translate("common.settings"),
    //                 icon: "fa-cog",
    //                 subMenu: []
    //             };
    //
    //             m.subMenu.push({
    //                 name: translate("profile.profile"),
    //                 icon: "fa-cogs",
    //                 state: "app.profile",
    //                 active: /app.profile/
    //             });
    //
    //             if (isAdmin || (isMasterUser)) {
    //                 m.subMenu.push({
    //                     name: translate("orgnization.orgnization"),
    //                     icon: "fa-users",
    //                     state: "app.tenant_user_list",
    //                     active: /app.tenant\w*/
    //                 });
    //             }
    //             if (isAdmin || (isMasterUser)) {
    //                 m.subMenu.push({
    //                     name: translate("common.rms"),
    //                     icon: "fa-sitemap",
    //                     state: "app.role_menu",
    //                     active: /app.role_menu/
    //                 });
    //             }
    //             if (isAdmin) {
    //                 m.subMenu.push({
    //                     name: translate("audit.audit"),
    //                     icon: "fa-check",
    //                     state: "app.reg_audit",
    //                     active: /app.reg_audit/
    //                 });
    //             }
    //
    //             menu.push(m);
    //
    //         }
    //
    //     });

    // };
};
