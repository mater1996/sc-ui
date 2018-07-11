/**
 * Created by bai on 2018/5/2
 */

// const moment = require('../../assets/lib/moment/moment.min');
let dialogCount = 0;

// 允许输入初始化日期  形式为 2018-07-12

// 因为swiper性能问题   swiperitem固定为三个 每次滑动会更换三个

Component({
    properties: {},
    data: {
        selectTimeRotate: 0,
        top: 0,
        left: 0
    },
    relations: {
        '../scDialog/sc-dialog': {
            type: 'child', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['sc-class'],
    ready() {

    },
    methods: {
        touchmove(e) {
            console.log(e);
        },
        hourtouchmove(e) {
            if (this.data.px) {
                let touch = e.touches[0];
                let {clientX, clientY} = touch;
                clientX -= e.target.offsetLeft -this.data.timePx ;
                clientY -= e.target.offsetTop-this.data.timePy;
                console.log('hhhhhh', e);
                let angle = parseInt(this.getAngle(this.data.px, this.data.py, clientX, clientY));
                console.log(angle);
                if ((angle - 15) % 30 === 0) {
                    angle = angle - 15;
                    this.setData({
                        selectTimeRotate: angle
                    })
                }
            } else {
                this._queryMultipleNodes('.time-hour').then(res => {
                    this.data.timePx = res[0].left + 130;
                    this.data.timePy = res[0].top + 130;
                    console.log(res);
                    this.setData({
                        top: this.data.timePy,
                        left: this.data.timePx
                    })
                    this._queryMultipleNodes('.time-hour-item-select .time-hour-item-number').then(res => {
                        this.data.px = res[0].left + 16 -this.data.timePx ;
                        this.data.py = res[0].top + 16 -this.data.timePy;
                        let touch = e.touches[0];
                        let {clientX, clientY} = touch;
                        // console.log('hhhhhh',e);
                        let angle = this.getAngle(this.data.px, this.data.py, clientX, clientY);
                        console.log(angle);
                        this.setData({
                            selectTimeRotate: angle
                        })
                    })
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
        getAngle(px, py, mx, my) {//获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
            return Math.atan2(my - py, mx - px) / Math.PI * 180
        }
    }
});