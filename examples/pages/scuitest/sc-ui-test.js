//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        motto: 'scui test',
    },
    onLoad: function () {

    },
    checkboxChange(e){
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    radioChange(e){
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    submit(e){
        console.log('表单提交，携带value值为：', e.detail.value)
    },
    switchChange(e){
        console.log('switch发生change事件',e.detail)
    }
});
