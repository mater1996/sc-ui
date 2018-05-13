/**
 * Created by bai on 2018/5/2
 */
let radioGroupCount = 1;

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        name: {
            type: String,
        }
    },
    data: {
        value: null
    },
    relations: {
        '../scRadio/sc-radio': {
            type: 'child',
        },
        '../scForm/sc-form': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class'],
    ready() {
        this.items = this._getAllRadios();
        this.setData({
            name: this.properties.name || 'radioGroup' + radioGroupCount++
        });
        for (let i of this.items) {
            if (i.data.checked) {
                this.setData({
                    value: i.data.value
                })
            }
        }
    },
    methods: {
        _getAllRadios: function () {
            return this.getRelationNodes('../scRadio/sc-radio');
        },
        _radioChange(e) {
            for (let i of this.items) {
                if (!i.data.clicked) {
                    if (!i.data.disabled) {
                        i.setData({
                            checked: false,
                        })
                    }
                } else {
                    i.setData({
                        clicked: false,
                    });
                    let value = this.data.value = i.data.value;
                    this.triggerEvent(`change`, {value: value}, {bubbles: true, composed: true})
                }
            }
        }
    }
});