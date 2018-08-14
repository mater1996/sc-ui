/**
 * Created by bai on 2018/6/17
 */
const regexp =  /(\b[0-9]{1,3}\b)/g;
module.exports = Behavior({
    behaviors: [],
    properties: {
        ripple: {
            type: Boolean,
            value: true
        }
    },
    data: {
        rippleList: [],
        rippleId: 0,
        rippleDeleteCount: 0,
        rippleDeleteTimer: null,
        rippleColor: '#ffffff',
        btnSelector: '.sc-class'
    },
    methods: {
        _addRipple_(e, holdAnimate) {
            if (!this.properties.disabled) {
                this._queryMultipleNodes_(this.data.btnSelector).then(res => {
                    const {width,height,left,top,backgroundColor='rgb(255,255,255,1)'} = res[0];
                    const {scrollLeft,scrollTop} = res[1];
                    const boxWidth = parseInt(width);
                    const boxHeight = parseInt(height);
                    const [r,g,b,o=1] = backgroundColor.match(regexp);
                    const wH = boxWidth > boxHeight ? boxWidth : boxHeight;
                    const nX = (e.detail.x - (left + scrollLeft)) - wH / 2;
                    const nY = (e.detail.y - (top + scrollTop)) - wH / 2;
                    this.data.rippleList.push({
                        rippleId: `ripple-${this.data.rippleId++}`,
                        width: wH,
                        height: wH,
                        left: nX,
                        top: nY,
                        backgroundColor:this._rgbIsLight_(r,g,b,o)?'rgb(0,0,0)':'rgb(255,255,255)',
                        startAnimate: true,
                        holdAnimate: holdAnimate || false
                    });
                    this.setData({
                        rippleList: this.data.rippleList
                    });
                });
            }
        },
        _queryMultipleNodes_(e) {
            return new Promise((resolve, reject) => {
                this.createSelectorQuery().select(e).fields({
                    size: true,
                    rect:true,
                    computedStyle: ['backgroundColor']
                }).selectViewport().scrollOffset().exec(function (res) {
                    resolve(res);
                })
            })
        },
        _rippleAnimationEnd_() {
            // 防抖
            this.data.rippleDeleteCount++;
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
            this.data.timer = setTimeout(deleteRipple.bind(this), 300);
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
        _longPress_(e) {
            this._addRipple_(e, true);
        },
        _touchEnd_() {
            let lastRipple = this.data.rippleList.slice(-1)[0];
            if (lastRipple && lastRipple.holdAnimate) {
                this.data.rippleList.pop();
                this.setData({
                    rippleList: this.data.rippleList
                });
            }
        },
        _rgbIsLight_(r,g,b,a){
            return (parseInt(r)*0.299 + parseInt(g)*0.578 + parseInt(b)*0.114 >= 192*a);
        }
    }
});