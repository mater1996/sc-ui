//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        jsUsage:'this.data.dialog = scui.Dialog("#dialog");this.data.dialog.toggle()',
        htmlUsage:'<sc-dialog id="dialog" sc-class="box-shadow-8"></sc-dialog>'
    },
    onLoad: function () {

    },
    onReady() {
        this.data.dialog = scui.Dialog("#dialog");
    },
    openDialog(){
        this.data.dialog.toggle();
    },
    closeDialog(){
        this.data.dialog.toggle();
    },
    dialogOpen(){
        console.log("模态框打开中");
    },
    dialogClose(){
        console.log("模态框关闭中");
    },
    dialogOpened(){
        console.log("模态框打开");
    },
    dialogClosed(){
        console.log("模态框关闭");
    }
});
