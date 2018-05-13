/**
 * Created by bai on 2018/5/2
 */

let inputCount = 1;

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
        selectionstart:{
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
        name:{
            type:String
        }
    },
    data: {
        inputValue:null,
    },
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    externalClasses: ['sc-class'],
    ready(){
        this.setData({
            inputValue:this.properties.value,
            placeholder:this.properties.label ? null: this.properties.placeholder,
            name:this.properties.name || 'input' + inputCount++
        })
    },
    methods: {
        _focus(e){
            if(!this.properties.disabled) {
                this.setData({
                    focus:true
                });
                this.triggerEvent('focus', e.detail, {})
            }
        },
        _blur(e){
            if(!this.properties.disabled) {
                this.setData({
                    focus:false
                });
                this.triggerEvent('blur', e, {})
            }
        },
        _input(e){
            if(!this.properties.disabled){
                this.setData({
                    inputValue:e.detail.value
                });
                this.triggerEvent('input', e.detail, {})
            }
        },
        _confirm(e){
            if(!this.properties.disabled) {
                this.triggerEvent('confirm', e.detail, {})
            }
        }
    }
});