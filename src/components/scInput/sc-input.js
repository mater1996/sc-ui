/**
 * Created by bai on 2018/5/2
 */

let inputCount = 1;

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        label: {
            type: String
        },
        value: {
            type: String
        },
        type: {
            type: String,
            value: 'text'
        },
        password: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String
        },
        placeholderStyle: {
            type: String
        },
        placeholderClass: {
            type: String,
            value: "input-placeholder"
        },
        disabled: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number,
            value: 140
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        focus: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: "done"
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        cursor: {
            type: Number,
        },
        selectionstart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        name: {
            type: String
        },
        float: {
            type: Boolean,
            value: true
        },
        inputType: {
            type: String
        },
        errText: {
            type: String
        },
        errStatus: {
            type: Boolean
        },
        regex: {
            type: String
        }
    },
    data: {
        value: null,
        inputTypeList: {
            phone: {
                regex: '^[1][3,4,5,7,8][0-9]{9}$',
                errText: '请输入正确的手机号'
            }
        },
        requireVerify: false,
        verify: {
            errText: null,
            regex: null
        }
    },
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    externalClasses: ['sc-class', 'icon'],
    ready() {
        const {value, placeholder, name, inputType, regex, errText} = this.properties;
        const {inputTypeList} = this.data;
        this.setData({
            value: value,
            placeholder: placeholder,
            name: name || 'input' + inputCount++
        });
        const inputTypeItem = inputTypeList[inputType];
        if (inputType && !inputTypeItem) {
            this.data.requireVerify = false;
            throw new Error('no this inputType');
        } else {
            if (regex || (inputType && inputTypeItem)) {
                this.data.requireVerify = true;
                this.data.verify.errText = errText || inputTypeItem.errText || null;
                this.data.verify.regex = new RegExp(regex || inputTypeItem.regex || null);
            }
        }
    },
    methods: {
        _focus(e) {
            if (!this.properties.disabled) {
                this.setData({
                    focus: true
                });
                this.triggerEvent('focus', e.detail, {})
            }
        },
        _blur(e) {
            if (!this.properties.disabled) {
                this.setData({
                    focus: false
                });
                this.triggerEvent('blur', e, {})
            }
        },
        _input(e) {
            const {disabled} = this.properties;
            const value = e.detail.value;
            if (!disabled) {
                // 未禁用该输入框  在sc-form/事件 内获取值的话必须经过某些规则  用户输入的规则占主要位置
                if (this.data.requireVerify) {
                    // 用户确认使用某些规则来校验判断
                    let {errText, regex} = this.data.verify;
                    if (errText && regex) {
                        this.setData({
                            errStatus: !regex.test(value)
                        });
                        if (this.properties.errStatus) {
                            this.setData({
                                value: value
                            });
                            this.data.value = null;
                        } else {
                            this.setData({
                                value: value
                            });
                        }
                    }
                } else {
                    this.setData({
                        value: value
                    });
                }
                console.log(this.data.requireVerify,this.data.value);
                this.triggerEvent('input', e.detail, {})
            }
        },
        _confirm(e) {
            if (!this.properties.disabled) {
                this.triggerEvent('confirm', e.detail, {})
            }
        }
    }
});