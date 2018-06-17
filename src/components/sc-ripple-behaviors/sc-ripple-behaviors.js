/**
 * Created by bai on 2018/6/17
 */

module.exports = Behavior({
    behaviors: [],
    properties: {
        ripple:{
            type:Boolean,
            value:true
        }
    },
    data: {
        rippleList: [],
        rippleId: 0,
        rippleDeleteCount: 0,
        rippleDeleteTimer: null,
        rippleColor: '#ffffff',
    },
    attached: function(){},
    methods: {
        _addRipple(e, holdAnimate) {
            if(!this.properties.disabled){
                this._queryMultipleNodes('.sc-class').then(res => {
                    const button = res[0] , viewPort = res[1];
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
        _queryMultipleNodes: function(e) {
            return new Promise((resolve, reject) => {
                const query = this.createSelectorQuery();
                query.select(e).boundingClientRect();
                query.selectViewport().scrollOffset();
                query.exec(function(res){
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
            if(lastRipple && lastRipple.holdAnimate){
                this.data.rippleList.pop();
                this.setData({
                    rippleList: this.data.rippleList
                });
            }
        }
    }
});