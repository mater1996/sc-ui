/**
 * Created by bai on 2018/5/2
 */

const transHexOtTgb = require('../../assets/lib/transHexOrRgb/transHexOrRgb');

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        label: {
            type: String,
        },
        value: {
            type: null
        },
        color:{
            type:String,
            value:'#ff4081'
        }
    },
    data: {
        checked: false,
        clicked: false,
        showRipple: false,
        disabled: false,
        value: null
    },
    ready() {
        this.setData({
            checked: this.properties.checked,
            disabled: this.properties.disabled,
            value: this.properties.value
        });
        if(!this.data.disabled){
            this.setData({
                borderColor:transHexOtTgb.colorRgb(this.properties.color.toString(),.54),
                iconColor:transHexOtTgb.colorHex(this.properties.color.toString(),0),
            });
        }
    },
    relations: {
        '../scRadioGroup/sc-radio-group': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class'],
    methods: {
        _changeRadio() {
            this.setData({
                checked: true,
                clicked: true,
                showRipple: true
            });
            this.triggerEvent(`radiochange`, {}, {bubbles: true, composed: true});
        },
        _animationend() {
            this.setData({
                showRipple: false
            })
        }
    }
});