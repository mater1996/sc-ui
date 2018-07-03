//index.js
//获取应用实例
const app = getApp();
const scui = require('../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        motto: 'scui test',
        width: 100,
        isHidden:false,
        tabList: [
            {
                label: '已申请',
                id: 'waiting',
                name: 'waiting'
            }, {
                label: '已通过1111111111111111',
                id: 'passed',
                name: 'passed'
            }, {
                label: '已失败',
                id: 'fail',
                name: 'fail'
            },
            {
                label: '已取消',
                id: 'cancel',
                name: 'cancel'
            }],
        snackBarLength:0
    },
    onLoad: function () {

    },
    onReady(){
        this.data.dialog = scui.Dialog("#dialog");
        this.data.snackBar = scui.SnackBar("#snackbar");
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
    },
    openSnackBar(){
        this.data.snackBar.open({
            message:'哈哈哈哈哈很长的提醒哈哈哈哈哈哈哈哈哈'+this.data.snackBarLength++,
            buttonText:'点我',
            buttonTextColor:'red',
            closeOnButtonClick:true,
            onButtonClick:() => {
                console.log('点击button');
            },
            onOpen:() => {
                console.log('snackBar打开中');
            },
            onOpened(){
                console.log('snackBar已打开');
            },
            onClose(){
                console.log('snackBar关闭中');
            },
            onClosed(){
                console.log('snackBar已关闭');
            }
        });
    },
    checkboxChange(e) {

        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    submit(e) {
        console.log('表单提交，携带value值为：', e.detail.value)
    },
    cellChange(e) {
        console.log('cell switch change 携带value值为：', e.detail.value)
    },
    switchChange(e) {
        console.log(' switch change 携带value值为：', e.detail.value)
    }
});
