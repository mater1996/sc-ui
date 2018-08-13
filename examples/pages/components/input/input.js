//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        inputUsage:'<sc-input sc-class="sc-input" label="普通" bindinput="input"></sc-input>',
        inputTip:'目前修改input下边框颜色较为麻烦，可以通过sc-class重写input::before的background-color来改写颜色',
        textareaUsage:' <sc-textarea sc-class="sc-textarea" style="width: 80%" label="多行文本框"></sc-textarea>',
        textareaTip:'鉴于微信对这个组件的层次问题，不建议使用该组件'
    },
    onLoad: function () {
    },
    onReady(){
    }
});
