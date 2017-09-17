/**
 *  16/3/8.
 */
"use strict";

let angular = require("angular");
module.exports = angular.module("utility.filters", [])
    .filter("textContent", require("./textContent"))
    .filter("price", require("./price"))
    .filter("bannerType", require("./bannerType"))
    .filter("JSONparse", require("./JSONparse.filter"))
    .filter("gender", require("./gender"))
    .filter("escape", require("./escape"))
    .filter("htmlContent", require("./htmlContent.js"))
    .filter("userRole", require("./userRole"))
    .filter("qiniu", require("./qiniu")("http://vartcdn.vart.la/"))
    .filter("qiniu_crm", require("./qiniu")("http://vartcrm.vart.la/"))
    .filter("qiniu_edm", require("./qiniu")("http://vartedm.vart.la/"))
    .filter("dateformats", function(){
        return function(value){
            if(value){
                return new Date(value);
            }else{
                return;
            }
        }
    })
    .filter("ages", function(){
        return function(val){
            if(val){
               val = new Date().getFullYear() - new Date(val).getFullYear();
               if(new Date().getMonth() > new Date(val).getMonth()){
                    val += 1;
               }else if(new Date().getMonth() == new Date(val).getMonth() && new Date().getDate() > new Date(val).getDate()){
                    val += 1;
               }
               return val + '岁';
            }else{
                return;
            }
        }
    })
    .name