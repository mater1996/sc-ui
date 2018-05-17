/**
 * Created by bai on 2018/5/2
 */
let swicthCount = 1;

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
        name:{
            type:String,
        },
        value:{
            type:null
        }
    },
    data: {
        checked:false,
        clicked:false,
        value:null
    },
    ready(){
        this.setData({
            checked:this.properties.checked,
            value:this.properties.value,
            name:this.properties.name || 'switch'+swicthCount++
        })
    },
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    externalClasses: ['sc-class'],
    methods: {
        _changeSwitch(){
            this.setData({
                checked:!this.data.checked,
                clicked:true
            });
            this.triggerEvent(`change`, {value:this.data.value,checked:this.data.checked}, { bubbles: true });
        },
        _animationend(){
            this.setData({
                clicked:false
            })
        }
    }
});