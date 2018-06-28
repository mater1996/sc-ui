//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        motto: 'scui test',
        width: 100,
        tabList: [
            {
                label: '已申请',
                id:'waiting',
                name: 'waiting'
            }, {
                label: '已通过1111111111111111',
                id:'passed',
                name: 'passed'
            }, {
                label: '已失败',
                id:'fail',
                name: 'fail'
            },
            {
                label: '已取消',
                id:'cancel',
                name: 'cancel'
            }],
    },
    onLoad: function () {

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
