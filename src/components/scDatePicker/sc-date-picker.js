/**
 * Created by bai on 2018/5/2
 */

const moment = require('../../assets/lib/moment/moment.min');
let dialogCount = 0;

// 允许输入初始化日期  形式为 2018-07-12

// 因为swiper性能问题   swiperitem固定为三个 每次滑动会更换三个

Component({
    properties: {},
    data: {
        yearView: false,          //年份视图
        dayList: [],              //所有的日历列表
        alreadyMonth: {},         //已经缓存过的日历列表
        yearList: [],             //所有的年份列表
        yearRange:50,             // 年份上下限
        selectYear: 0,            // 选中的年份
        selectDateObject: null,   // 选中的日期的object形式
        showDate: null,           // 显示的日期
        showDateObject: null,     // 显示的日期object形式
        currentSwiperItemDateIndex: 1,     //日历列表的swiper位置
        currentSwiperItemYearIndex: 0,     //年份列表的swiper位置
        duration: 300,                     // 滚动时长
        lockedTap: false,                  // 是否锁定左右点击的btn
        week: {                            // 很明显了
            0: '日',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六'
        },
        defaultOption:{
            date: new Date()
        }
    },
    relations: {
        '../scDialog/sc-dialog': {
            type: 'child', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['sc-class'],
    ready() {
        this.setData({
            dialogCount: dialogCount++
        });
        // 获取dialog对象
        this.data.dialog = this.selectComponent('#picker-dialog-' + this.data.dialogCount);
    },
    methods: {
        _nextMonthDay() {
            let date = this.data.showDate.clone().add(1, 'months');
            let dayListItem = this._monthDay(date);
            if (dayListItem.length > 0) {
                return dayListItem;
            }
        },
        _lastMonthDay() {
            let date = this.data.showDate.clone().add(-1, 'months');
            let dayListItem = this._monthDay(date);
            if (dayListItem.length > 0) {
                return dayListItem;
            }
        },
        _monthDay(d) {
            // 接受一个日期 返回该日期的所有日期按照数组形式，没有日期的为空
            const date = moment(d);
            let res = [];
            let alreadyMonthName = date.format('YYYY-MM');
            if (!this.data.alreadyMonth[alreadyMonthName]) {
                const year = date.year();
                const month = date.month();
                const firstDay = date.clone().set({'year': year, 'month': month, 'date': 1});
                let weekday = firstDay.day();
                let days = date.daysInMonth();
                for (let i = 0; i < weekday; i++) {
                    res.push(null);
                }
                for (let j = 1; j <= days; j++) {
                    res.push(moment().set({'year': year, 'month': month, 'date': j}).toObject());
                }
                this.data.alreadyMonth[alreadyMonthName] = res;
            }else{
                res = this.data.alreadyMonth[alreadyMonthName];
            }
            return res;
        },
        _change(e) {
            const current = e.detail.current;
            let showDate = this.data.showDate.add(current - this.data.currentSwiperItemDateIndex, 'months');
            // 下一个或上一个日历视图  设置新的显示日期，显示日期object形式以及当前的显示item index
            this.setData({
                showDate: showDate,
                showDateObject: showDate.toObject(),
                currentSwiperItemDateIndex:current
            });
            // 判定是否是最后一个 或者 第一个日期
            if (current === this.data.dayList.length - 1) {
                // 锁定btn
                this.setData({
                    lockedTap: true
                });
                setTimeout(() => {
                    const {dayList} = this.data;
                    dayList.push(this._nextMonthDay());
                    this.setData({
                        lockedTap: false,
                        dayList:dayList,
                        currentSwiperItemDateIndex: current
                    });
                }, this.data.duration);
            }
            if (current === 0) {
                this.setData({
                    lockedTap: true
                });
                setTimeout(() => {
                    const {dayList} = this.data;
                    dayList.unshift(this._lastMonthDay());
                    this.setData({
                        lockedTap: false,
                        dayList:dayList,
                        currentSwiperItemDateIndex: 1
                    });
                }, this.data.duration);
            }
        },
        _next() {
            // tap点击的时候   应该在一段时间内不让点击  并且显示的日期加一
            this.data.showDate.add(1, 'months');
            this.setData({
                currentSwiperItemDateIndex: ++this.data.currentSwiperItemDateIndex
            })
        },
        _last() {
            this.data.showDate.add(-1, 'months');
            this.setData({
                currentSwiperItemDateIndex: --this.data.currentSwiperItemDateIndex
            })
        },
        _selectDate(e) {
            let date = e.currentTarget.dataset.date;
            if (date) {
                this.setData({
                    selectDateObject: date,
                    selectWeek: moment(date).weekday()
                });
            }
        },
        _changeViewToYear() {
            this.setData({
                yearView: !this.data.yearView
            })
        },
        _selectYear(e) {
            let year = e.currentTarget.dataset.year;
            if (year !== this.data.selectYear) {
                let date = this.data.showDate.clone();
                date.set('year', year);
                date.set('month', date.month());
                date.set('date', date.date());
                this.setData({
                    selectYear: year,
                    selectDateObject: date.toObject(),
                    selectWeek: date.weekday(),
                    showDate: date,
                    currentSwiperItemDateIndex:1,
                    showDateObject: date.toObject()
                });
                this.setData({
                    dayList: [this._lastMonthDay(),this._monthDay(date.clone()),this._nextMonthDay()]
                });
            }
            this.setData({
                yearView: false
            });
        },
        _open(o) {
            let d = JSON.parse(JSON.stringify(this.data.defaultOption));
            let options = Object.assign(d, o);
            const date = moment(options.date);
            const year = date.year();
            const {yearRange} = this.data;
            let yearList = [];
            for (let j = -yearRange; j < yearRange; j++) {
                yearList[j + yearRange] = year + j;
            }
            // 设置日历视图数据
            this.setData({
                selectDateObject: date.toObject(),
                showDate: date,
                showDateObject: date.toObject(),
                selectWeek: date.weekday(),
                currentSwiperItemDateIndex:1,
                currentSwiperItemYearIndex: yearRange-2,
                yearList: yearList,
                selectYear: year
            });
            this.setData({
                dayList: [this._lastMonthDay(),this._monthDay(date.clone()),this._nextMonthDay()],
            });
            this.data.dialog._open();
            this.triggerEvent('open', {});
        },
        _close(){
            this.data.dialog._close();
            this.triggerEvent('close', {});
        },
        _submit(){
            this.triggerEvent('submit', {value:moment(this.data.selectDateObject).toDate()});
            this._close();
        }
    }
});