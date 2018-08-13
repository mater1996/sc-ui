//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        usage:{
           progress:'<sc-progress color="red"></sc-progress>',
           circleProgress:'<sc-loading></sc-loading>',
        },
        tip:'您可以通过添加sc-class/class类来重写按钮某些属性'
    },
    onLoad: function () {

    },
    onReady(){

    }
});
