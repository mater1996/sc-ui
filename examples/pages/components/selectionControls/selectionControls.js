//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        checkboxUsage: '<sc-checkbox-group bindchange="checkboxChange">\n  <sc-checkbox label="初始选中" checked value="check1" color="red"></sc-checkbox>\n' +
        '  <sc-checkbox reverse label="初始未选中" checked="{{false}}" value="check2"></sc-checkbox>\n' +
        '  <sc-checkbox disabled sc-class="sc-checkbox" label="禁用"></sc-checkbox>\n' +
        '</sc-checkbox-group>',
        switchUsage: '<sc-switch class="sc-switch" bind:change="switchChange"></sc-switch>',
        radioUsage: '<sc-radio-group bind:change="radioChange">\n' +
        '  <sc-radio label="radio1" checked value="radio1"></sc-radio>\n' +
        '  <sc-radio label="radio2" reverse value="radio2"></sc-radio>\n' +
        '  <sc-radio label="disabled" checked disabled></sc-radio>\n' +
        '</sc-radio-group>',
        checkValue: ['check1'].toString(),
        switchValue: false,
        radioValue: 'radio1'
    },
    onLoad: function () {
    },
    onReady() {
    },
    switchChange(e) {
        console.log(' switch change 携带value值为：', e.detail.value);
        this.setData({
            switchValue: e.detail.value.toString()
        })
    },
    checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
        this.setData({
            checkValue: e.detail.value.toString()
        })
    },
    radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
        this.setData({
            radioValue: e.detail.value.toString()
        })
    },
    radioItemChange(e){
        console.log(e)
    }
});
