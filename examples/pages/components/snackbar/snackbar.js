//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        snackBarLength:0
    },
    onLoad: function () {

    },
    onReady() {
        this.data.snackBar = scui.SnackBar("#snackbar");
    },
    openSnackBar(){
        this.data.snackBar.open({
            message:'snackBar打开了'+this.data.snackBarLength++,
            buttonText:'点我',
            // buttonTextColor:'red',
            // color:'lightblue',
            // messageColor:'black',
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
    }
});
