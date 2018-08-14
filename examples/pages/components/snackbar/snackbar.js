//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        snackBarLength:0,
        jsUsage:'this.data.snackBar = scui.SnackBar("#snackbar");\n' +
        'this.data.snackBar.open({\n' +
        '  message:\'snackBar打开了\'+this.data.snackBarLength++,\n' +
        '  buttonText:\'点我\',\n' +
        '  // buttonTextColor:\'red\',\n' +
        '  // color:\'lightblue\',\n' +
        '  // messageColor:\'black\',\n' +
        '  closeOnButtonClick:true,\n' +
        '  onButtonClick:() => {\n' +
        '    console.log(\'点击button\');\n' +
        '  },\n' +
        '  onOpen:() => {\n' +
        '    console.log(\'snackBar打开中\');\n' +
        '  },\n' +
        '  onOpened(){\n' +
        '    console.log(\'snackBar已打开\');\n' +
        '  },\n' +
        '  onClose(){\n' +
        '    console.log(\'snackBar关闭中\');\n' +
        '  },\n' +
        '  onClosed(){\n' +
        '    console.log(\'snackBar已关闭\');\n' +
        '  }\n' +
        '});',
        htmlUsage:'<sc-snackbar id="snackbar">这是一个snackbar</sc-snackbar>'
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
