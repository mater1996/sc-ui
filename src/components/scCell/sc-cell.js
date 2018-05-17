/**
 * Created by bai on 2018/5/2
 */
Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        subHeader:{
            type:String
        },
        ripple:{
            type:Boolean,
            value:true
        },
        switch:{
            type:Boolean,
            value:false
        },
        to:{
            type:String
        },
        arrow:{
            type:Boolean,
            value:false
        },
        leftIcon:{
            type:String
        },
        rightIcon:{
            type:String
        },
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
        rippleList: [],
        rippleId: 0,
        rippleDeleteCount: 0,
        rippleDeleteTimer: null,
        rippleColor: '#ffffff',
    },
    ready() {
        this.setData({
            name:this.properties.name,
            value:this.properties.value
        })
    },
    relations: {
        '../scCellGroup/sc-cell-group': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class','sc-switch-class'],
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
        },
        _switchChange(e){
            this.triggerEvent('cellSwitchChange', e.detail, { bubbles: true});
        }
    }
});