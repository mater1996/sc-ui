/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        checked:{
            type:Boolean,
            value:false
        },
        disabled:{
            type:Boolean,
            value:false
        },
        label:{
            type:String,
        },
        value:{
            type:null
        }
    },
    data: {
        checked:false,
        clicked:false,
        showRipple:false,
        disabled:false,
        value:null
    },
    ready(){
        this.setData({
            checked:this.properties.checked,
            disabled:this.properties.disabled,
            value:this.properties.value
        })
    },
    relations: {
        '../scOption/sc-option': {
            type: 'child', // 关联的目标节点应为子节点
        },
        '../scForm/sc-form':{
            type: 'parent', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['sc-class'],
    methods: {
        _changeRadio(){
            this.setData({
                checked:true,
                clicked:true,
                showRipple:true
            });
            this.triggerEvent(`radiochange`, {}, { bubbles: true, composed: true });
        },
        _animationend(){
            this.setData({
                showRipple:false
            })
        },
        _select(){
            this.setData({
                clicked:!this.data.clicked
            });
        }
    }
});