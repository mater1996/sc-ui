/**
 * Created by bai on 2018/5/2
 */
const scRippleBehaviors = require('../sc-ripple-behaviors/sc-ripple-behaviors');
Component({
    behaviors: [scRippleBehaviors],
    properties: {
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
            type: 'child',
        },
        '../scCheckboxGroup/sc-checkbox-group': {
            type: 'child',
        },
        '../scInput/sc-input': {
            type: 'child',
        },
        '../scTextarea/sc-textarea': {
            type: 'child',
        },
        '../scSwitch/sc-switch': {
            type: 'child',
        },
        '../scRadioGroup/sc-radio-group': {
            type: 'child',
        }
    },
    data: {
        btnClass:'submit-btn-class'
    },
    externalClasses: ['sc-class','submit-btn-class'],
    ready() {
        this.formControllers = this._getAllControl();
    },
    methods: {
        _getAllControl: function () {
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
            for (let key in formControllers) {
                if (formControllers.hasOwnProperty(key)) {
                    formControllers[key].length > 0 ? formControllers[key].map(v => {
                        Object.defineProperty(value, v.data.name, {
                            writable: true,
                            value: v.data.value
                        })
                    }) : null;
                }
            }
            this.triggerEvent(`submit`, {value: value})
        }
    }
});