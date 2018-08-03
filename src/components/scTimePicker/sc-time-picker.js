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
        hourtouchmove(e) {
            this._queryMultipleNodes('.time-hour').then(res => {
                // console.log(res);
                this.setData({
                    top: res[0].top + (res[0].width / 2),
                    left: res[0].left + (res[0].width)
                })
                this.setData({
                    ctop: res[0].top + (res[0].width / 2),
                    cleft: res[0].left + (res[0].width / 2)
                })
                // console.log(this.data.top,this.data.left);
                this.setData({
                    ptop: e.changedTouches[0].clientY,
                    pleft: e.changedTouches[0].clientX
                });
                // console.log('移动点位置（相对于中心）',this.data.pleft-this.data.cleft,-(this.data.ptop-this.data.ctop));
                let angle = parseInt(this.getAngle(this.data.pleft - this.data.cleft, -(this.data.ptop - this.data.ctop)));
                // console.log(angle);
                let range = parseInt(angle/30)*30;
                let max = range + 15;
                let min = range - 15;
                // if(angle < max  ||angle > min){
                //     this.setData({
                //         selectTimeRotate: (parseInt(angle/30)+ (angle<0?-1:1)) *30
                //     })
                // }
            });
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
        getAngle(x,y) {    // 起始点  结束点
            return this.angleTwoPoints(x,y)
        },
        angleTwoPoints(x,y) {
            return Math.atan2(y,x) * 180 / Math.PI
        }
    }
});