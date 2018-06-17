/**
 * Created by bai on 2018/5/2
 */
const scRippleBehaviors = require('../sc-ripple-behaviors/sc-ripple-behaviors');
Component({
    behaviors: [scRippleBehaviors],
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        reportSubmit: {
            type: Boolean,
            value: false
        },
        submitText:{
            type: String,
        },
        showSubmit:{
            type: Boolean,
            value: true
        }
    },
    relations: {
        '../scButton/sc-button': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scCheckboxGroup/sc-checkbox-group': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scInput/sc-input': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scTextarea/sc-textarea': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scSwitch/sc-switch': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scRadioGroup/sc-radio-group': {
            type: 'child', // 关联的目标节点应为父节点
        }
    },
    data: {

    },
    externalClasses: ['sc-class','submit-btn-class'],
    ready() {
        this.formControllers = this._getAllControl();
    },
    methods: {
        _getAllControl: function () {
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            return {
                checkboxGroups: this.getRelationNodes('../scCheckboxGroup/sc-checkbox-group'),
                inputs: this.getRelationNodes('../scInput/sc-input'),
                textareas: this.getRelationNodes('../scTextarea/sc-textarea'),
                switchs: this.getRelationNodes('../scSwitch/sc-switch'),
                radioGroups: this.getRelationNodes('../scRadioGroup/sc-radio-group')
            };
        },
        _formSubmit(e) {
            let formControllers = this.formControllers;
            let value = {
                formId: e.detail.formId
            };
            for (let key in this.formControllers) {
                if (formControllers.hasOwnProperty(key)) {
                    formControllers[key].length > 0 ? formControllers[key].map(v => {
                        Object.defineProperty(value, v.data.name, {
                            writable: false,
                            value: v.data.value
                        })
                    }) : null;
                }
            }
            this.triggerEvent(`submit`, {value: value}, {bubbles: true, composed: true})
        }
    }
});