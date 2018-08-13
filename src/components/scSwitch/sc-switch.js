/**
 * Created by bai on 2018/5/2
 */
let swicthCount = 1;

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
        name: {
            type: String,
        },
        color: {
            type: String,
            value: '#ff4081'
        },
        ripple: {
            type: Boolean,
            value: true
        }
    },
    data: {
        checked: false,
        clicked: false,
        value: null
    },
    ready() {
        const {checked, name = 'switch' + swicthCount++} = this.properties;
        this.setData({
            checked,
            value: checked,
            name
        })
    },
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    externalClasses: ['sc-class'],
    methods: {
        _changeSwitch() {
            let {checked, name} = this.data;
            checked = !checked;
            this.setData({
                checked: checked,
                clicked: true,
                value: checked
            });
            this.triggerEvent(`change`, {name, value: checked}, {bubbles: true});
        },
        _animationend() {
            this.setData({
                clicked: false
            })
        }
    }
});