//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        tabList: [
            {
                label: 'tab1',
                id: 'waiting',
                name: 'waiting'
            }, {
                label: '很长的标题。。。。。。。。',
                id: 'passed',
                name: 'passed'
            }, {
                label: 'tab2',
                id: 'fail',
                name: 'fail'
            },
            {
                label: 'tab3',
                id: 'cancel',
                name: 'cancel'
            }],
        jsUsage:'tabList: [{\n' +
        ' label: \'tab1\',\n' +
        ' id: \'waiting\',\n' +
        ' name: \'waiting\'\n' +
        '}...]',
        htmlUsage:'<sc-tab-group tab-list="{{tabList}}" style="min-height: 180px" transition>\n' +
        '  <sc-tab class="text-body2">\n' +
        '    <text>凌晨两点多入睡，五点左右，天色未亮，被猫咪惊醒。它也许刚睡醒，蹿到枕头边贴近我的身体，发出呼噜呼噜的声音，\n' +
        '    流连之后跳下床去，在客厅里玩耍，发出追逐小球和兔皮老鼠的声音。</text>\n' +
        '  </sc-tab>\n'+
        '</sc-tab-group>'
    },
    onLoad: function () {
    },
    onReady() {
    },
    tabChange(e){
        console.log('tab change 当前的tab位置为',e.detail.value)
    }
});
