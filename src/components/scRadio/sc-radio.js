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
        color: {
            type: String,
            value: '#ff4081'
        },
        reverse: {
            type: Boolean,
            value: false
        },
        ripple: {
            type: Boolean,
            value: true
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
            this.triggerEvent(`radiochange`, {value:this.properties.value}, {bubbles: true, composed: true});
        },
        _animationend() {
            this.setData({
                showRipple: false
            })
        }
    }
});