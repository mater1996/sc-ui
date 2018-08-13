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
        btnSelector:'.submit-btn-class'
    },
    externalClasses: ['sc-class','sc-button-class'],
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
                    formControllers[key].length > 0 ? formControllers[key].forEach(v => {
                        value[v.data.name] = v.data.value || null;
                    }) : null;
                }
            }
            this.triggerEvent(`submit`, {value: value})
        },
        _tap(e){
            this._addRipple_(e);
        },
        _longPress(e){
            this._longPress_(e);
        },
        _rippleAnimationEnd(){
            this._rippleAnimationEnd_();
        },
        _touchEnd(){
            this._touchEnd_();
        }
    }
});