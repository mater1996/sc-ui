/**
 * Created by bai on 2018/5/2
 */
const scRippleBehaviors = require('../sc-ripple-behaviors/sc-ripple-behaviors');
Component({
    behaviors: [scRippleBehaviors],
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        subHeader:{
            type:String
        },
        switch:{
            type:Boolean,
            value:false
        },
        to:{
            type:String
        },
        arrow:{
            type:Boolean,
            value:false
        },
        checked:{
            type:Boolean,
            value:false
        },
        disabled:{
            type:Boolean,
            value:false
        },
        name:{
            type:String,
        },
        value:{
            type:null
        },
        rightText:{
            type:String
        }
    },
    data: {

    },
    ready() {
        this.setData({
            name:this.properties.name,
            value:this.properties.value
        })
    },
    relations: {
        '../scCellGroup/sc-cell-group': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class','sc-switch-class','left-icon','right-icon'],
    methods: {
        _switchChange(e){
            this.triggerEvent('cellSwitchChange', e.detail, { bubbles: true});
        }
    }
});