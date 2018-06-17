/**
 * Created by bai on 2018/5/2
 */

let textareaCount = 1;

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        label:{
            type:String
        },
        value:{
            type:String
        },
        type:{
            type:String,
            value:'text'
        },
        password:{
            type:Boolean,
            value:false
        },
        placeholder:{
            type:String
        },
        placeholderStyle:{
            type:String
        },
        placeholderClass:{
            type:String,
            value:"input-placeholder"
        },
        disabled:{
            type:Boolean,
            value:false
        },
        maxlength:{
            type:Number,
            value:140
        },
        cursorSpacing:{
            type:Number,
            value:0
        },
        focus:{
            type:Boolean,
            value:false
        },
        confirmType:{
            type:String,
            value:"done"
        },
        confirmHold:{
            type:Boolean,
            value:false
        },
        cursor:{
            type:Number,
        },
        selectionStart:{
            type:Number,
            value:-1
        },
        selectionEnd:{
            type:Number,
            value:-1
        },
        adjustPosition:{
            type:Boolean,
            value:true
        },
        showConfirmBar:{
            type:Boolean,
            value:true
        },
        fixed:{
            type:Boolean,
            value:false
        },
        autoHeight:{
            type:Boolean,
            value:false
        },
        height:{
            type:String,
            value:'64rpx'
        },
        name:{
            type:String
        },
        float:{
            type:Boolean,
            value:true
        }
    },
    data: {
        value:null,
    },
    externalClasses: ['sc-class'],
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    ready(){
        this.setData({
            value:this.properties.value,
            placeholder:this.properties.label ? null: this.properties.placeholder,
            name:this.properties.name || 'textarea' + textareaCount++
        })
    },
    methods: {
        _focus(e){
            if(!this.properties.disabled){
                this.setData({
                    focus:true
                });
                this.triggerEvent('focus', e, {})
            }
        },
        _blur(e){
            if(!this.properties.disabled){
                this.setData({
                    focus:false
                });
                this.triggerEvent('blur', e, {})
            }
        },
        _input(e){
            if(!this.properties.disabled){
                this.setData({
                    value:e.detail.value
                });
                this.triggerEvent('input',e.detail, {})
            }
        },
        _confirm(e){
            if(!this.properties.disabled)
            this.triggerEvent('confirm', e.detail, {})
        },
        _linechange(e){
            if(!this.properties.disabled){
                this.triggerEvent('linechange', e.detail, {})
            }
        }
    }
});