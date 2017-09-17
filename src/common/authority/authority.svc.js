"use strict";

module.exports = function($http, API,$httpParamSerializer){
  return {
    getMenu: function () {
      return $http.get(API + "/menus").then(res => res.data);
    },
    getRole: function() {
      return $http.get(API + "/roles").then(res => res.data);
    },
    addRole: function(role) {
      return $http.post(API + "/roles",role).then(res => res.data);
    },
    // 添加角色菜单
    addRoleMenu: function(role) {
      return $http.post(API + "/roleMenus",role).then(res => res.data);
    },
    getRoleMenu: function(id) {
      return $http.get(API + "/roleMenus/"+id).then(res => res.data);
    },
    getUserRole: function(id) {
      return $http.get(API + "/userRoles/"+id).then(res => res.data);
    },
    // 添加用户角色
    addUserRole: function(user) {
      return $http.post(API + "/userRoles",user).then(res => res.data);
    },
    // 获取用户
    getUserList: function() {
      return $http.get(API + "/tenantUsers").then(res => res.data);
    },
    // 新机构菜单
    addTenantMenu: function(tenant){
      return $http.post(API + "/newTenantMenusV2",tenant).then(res => res.data);
    },
    // 获取机构ID
    getTenantId: function(page){
      return $http.get(API + "/tenants?"+$httpParamSerializer(page)).then(res => res.data);
    },
    getTenantById: function(id) {
      return $http.get(API + "/tenants/" + id).then(res => res.data);
    },
    //查询机构id list
    getTenantIdList: function(tenant){
      return $http.get(API + "/tenantAppIds?" + $httpParamSerializer(tenant)).then(res => res.data);
    },
    newTenantId: function(tenant){
      return $http.post(API + "/tenantAppIds", tenant).then(res => res.data);
    },
    //修改
    editTenantId: function(tenant){
      return $http.put(API + "/tenantAppIds", tenant).then(res => res.data);
    },
    //guanbi
    removeTenantId: function(ids){//Id=1,2,3
      return $http.delete(API + "/tenantAppIds?Id=" + ids).then(res => res.data);
    },
    // 新增机构
    addTenant: function(tenant) {
      return $http.post(API + "/tenants",tenant).then(res => res.data);
    },
    // 新增机构默认用户
    addTenantUser: function(tenant) {
      return $http.post(API + "/tenants/users",tenant).then(res => res.data);
    },
    // 获取机构菜单
    getTenantMenu: function(id) {
      return $http.get(API + "/menus?tenantId="+id).then(res => res.data);
    },
    // get menu controller
    getMenuController: function(id) {
      return $http.get(API + "/menuControllerByMenuId/" + id).then(res => res.data);
    },
    // 删除菜单controller
    removeMenuController: function(id) {
      return $http.delete(API + "/menuControllers/" + id).then(res => res.data);
    },
    // 修改菜单controller
    editMenuController: function(menuParam) {
      return $http.put(API + "/menuControllers",menuParam).then(res => res.data);
    },
    // 新增菜单controller
    addMenuController: function(menuParam) {
      return $http.post(API + "/menuControllers",menuParam).then(res => res.data);
    },
    // 代销机构
    newConsignment: function(criterial){
      return $http.post(API + "/newTenantAgents", criterial).then(res => res.data);
    },
    removeConsignment: function(id){
      return $http.post(API + "/deleteTenantAgents?id=" + id).then(res => res.data);
    },
    editConsignment: function(criterial){
      return $http.post(API + "/editTenantAgents", criterial).then(res => res.data);
    },
    getConsignment: function(criterial){
      return $http.get(API + "/tenantAgents?" + $httpParamSerializer(criterial)).then(res => res.data);
    }
  }
}
