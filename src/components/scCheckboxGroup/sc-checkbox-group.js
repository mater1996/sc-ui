/**
 * Created by bai on 2018/5/2
 */
let checkboxGroupCount = 1;

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        name: {
            type: String,
        },
        direction: {
            type: String,
            value: 'row'
        }
    },
    data: {
        value: []
    },
    relations: {
        '../scCheckbox/sc-checkbox': {
            type: 'child', // 关联的目标节点应为子节点
        },
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['sc-class'],
    ready() {
        this.items = this._getAllCheckboxs();
        this.setData({
            name: this.properties.name || 'checkboxGroup' + checkboxGroupCount++,
        });
        for (let i of this.items) {
            if (i.data.checked) {
                this.data.value.push(i.data.value)
            }
        }
    },
    methods: {
        _getAllCheckboxs: function () {
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            return this.getRelationNodes('../scCheckbox/sc-checkbox');
        },
        _checkChange(e) {
            let value = this.data.value = [];
            for (let i of this.items) {
                if (i.data.checked) {
                    value.push(i.data.value)
                }
            }
            this.triggerEvent(`change`, {value: value}, {bubbles: true, composed: true})
        }
    },
});