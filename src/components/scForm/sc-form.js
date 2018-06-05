/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
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
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scCheckboxGroup/sc-checkbox-group': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scInput/sc-input': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scTextarea/sc-textarea': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scSwitch/sc-switch': {
            type: 'child', // 关联的目标节点应为父节点
        },
        '../scRadioGroup/sc-radio-group': {
            type: 'child', // 关联的目标节点应为父节点
        }
    },
    data: {
        rippleList: [],
        rippleId: 0,
        rippleDeleteCount: 0,
        rippleDeleteTimer: null,
        rippleColor: '#ffffff',
    },
    externalClasses: ['sc-class','submit-btn-class'],
    ready() {
        this.formControllers = this._getAllControl();
    },
    methods: {
        _getAllControl: function () {
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
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
            for (let key in this.formControllers) {
                if (formControllers.hasOwnProperty(key)) {
                    formControllers[key].length > 0 ? formControllers[key].map(v => {
                        Object.defineProperty(value, v.data.name, {
                            writable: false,
                            value: v.data.value
                        })
                    }) : null;
                }
            }
            this.triggerEvent(`submit`, {value: value}, {bubbles: true, composed: true})
        },
        _addRipple(e, holdAnimate) {
            if (!this.properties.disabled) {
                this._queryMultipleNodes('.submit-btn-class').then(res => {
                    const button = res[0], viewPort = res[1];
                    const boxWidth = parseInt(button.width);
                    const boxHeight = parseInt(button.height);
                    const wH = boxWidth > boxHeight ? boxWidth : boxHeight;
                    const nX = (e.detail.x - (button.left + viewPort.scrollLeft)) - wH / 2;
                    const nY = (e.detail.y - (button.top + viewPort.scrollTop)) - wH / 2;
                    //设置涟漪div样式，准备播放动画
                    this.data.rippleList.push({
                        rippleId: `ripple-${this.data.rippleId++}`,
                        width: wH,
                        height: wH,
                        left: nX,
                        top: nY,
                        startAnimate: true,
                        holdAnimate: holdAnimate || false
                    });
                    this.setData({
                        rippleList: this.data.rippleList
                    });
                });
            }
        },
        _queryMultipleNodes: function (e) {
            return new Promise((resolve, reject) => {
                const query = this.createSelectorQuery();
                query.select(e).boundingClientRect();
                query.selectViewport().scrollOffset();
                query.exec(function (res) {
                    resolve(res);
                });
            })
        },
        _scbuttonrippleAnimationend() {
            // 防抖
            this.data.rippleDeleteCount++;
            if (this.data.timer) {
                clearTimeout(this.data.timer);
                this.data.timer = setTimeout(deleteRipple.bind(this), 300);
            } else {
                this.data.timer = setTimeout(deleteRipple.bind(this), 300);
            }

            function deleteRipple() {
                this.data.rippleList.splice(0, this.data.rippleDeleteCount);
                this.setData({
                    rippleList: this.data.rippleList
                });
                clearTimeout(this.data.timer);
                this.data.timer = null;
                this.data.rippleDeleteCount = 0;
            }
        },
        _longPress(e) {
            this._addRipple(e, true);
        },
        _touchend(e) {
            let lastRipple = this.data.rippleList.slice(-1)[0];
            if (lastRipple && lastRipple.holdAnimate) {
                this.data.rippleList.pop();
                this.setData({
                    rippleList: this.data.rippleList
                });
            }
        },
    }
});