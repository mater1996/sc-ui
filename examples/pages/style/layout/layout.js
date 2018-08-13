//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        tips:'使用以下样式快速添加布局',
        usage:'<view class="layout-row layout-center"></view>',
        flexDirection:'row',
        flexJustifyContent: 'start',
        flexAlignItems: 'start'
    },
    onLoad: function () {
        this.setData({
            layout1:this.getFlexD(this.data.flexDirection),
            layout2:this.getFlexJA(this.data.flexJustifyContent,this.data.flexAlignItems)
        })
    },
    onReady(){

    },
    flexDirectionChange(e){
        this.data.flexDirection = e.detail.value;
        this.setData({
            layout1:this.getFlexD(e.detail.value)
        })
    },
    flexJustifyContentChange(e){
        this.data.flexJustifyContent = e.detail.value;
        this.setData({
            layout2:this.getFlexJA(this.data.flexJustifyContent,this.data.flexAlignItems)
        })
    },
    flexAlignItemsContentChange(e){
        this.data.flexAlignItems = e.detail.value;
        this.setData({
            layout2:this.getFlexJA(this.data.flexJustifyContent,this.data.flexAlignItems)
        })
    },
    getFlexD(d){
        return `layout-${d}`
    },
    getFlexJA(j,a){
        if(j === a){
            return `layout-${j}`
        }else{
            return `layout-${j}-${a}`
        }
    }
});
