/**
 * Created by bai on 2018/5/2
 */

const dayjs = require('../../assets/lib/day/day');
let dialogCount = 0;

Component({
    properties: {},
    data: {
        selectTimeRotate: 0,
        top: 0,
        left: 0,
        baseHour: 3,
        baseMinute: 15,
        date: null,
        dateObject: null,
        AmOrPm: null,
        hourList: [{
            hour: 1,
            active: false
        }, {
            hour: 2,
            active: false
        }, {
            hour: 3,
            active: true
        }, {
            hour: 4,
            active: false
        }, {
            hour: 5,
            active: false
        }, {
            hour: 6,
            active: false
        }, {
            hour: 7,
            active: false
        }, {
            hour: 8,
            active: false
        }, {
            hour: 9,
            active: false
        }, {
            hour: 10,
            active: false
        }, {
            hour: 11,
            active: false
        }, {
            hour: 12,
            active: false
        }],
        minuteList: [{
            minute: 5,
            active: false
        }, {
            minute: 10,
            active: false
        }, {
            minute: 15,
            active: true
        }, {
            minute: 20,
            active: false
        }, {
            minute: 25,
            active: false
        }, {
            minute: 30,
            active: false
        }, {
            minute: 35,
            active: false
        }, {
            minute: 40,
            active: false
        }, {
            minute: 45,
            active: false
        }, {
            minute: 50,
            active: false
        }, {
            minute: 55,
            active: false
        }, {
            minute: 60,
            active: false
        }],
        minuteView: false,
        defaultOption: {}
    },
    relations: {
        '../scDialog/sc-dialog': {
            type: 'child',
        }
    },
    externalClasses: ['sc-class'],
    ready() {
        this.setData({
            dialogCount: dialogCount++
        });
        this.data.dialog = this.selectComponent('#time-picker-dialog-' + this.data.dialogCount);
    },
    methods: {
        hourtouchmove(e) {
            this.getAngle(e, '.time-hour').then(angle => {
                let c15 = Math.ceil(angle / 15);
                c15 = c15 - (c15 % 2 === 0 ? 0 : 1);
                let pHour = c15 / 2;
                let lastHour = this.data.date.hour();
                if (lastHour === 0) {
                    pHour = pHour === 12 || pHour === 0 ? 0 : pHour;
                } else if (lastHour === 12) {
                    pHour = pHour === 0 || pHour === 12 ? 12 : pHour;
                }
                if (pHour !== lastHour && pHour + 12 !== lastHour) {
                    if (lastHour === 0) {
                        if (pHour === 11) {
                            pHour = pHour + 12;
                        }
                    } else if (lastHour === 12) {
                        if (pHour === 1) {
                            pHour = pHour + 12;
                        }
                    } else if (this.data.AmOrPm === 'PM') {
                        pHour = pHour + 12;
                    }
                    let date = this.data.date.set('hour', pHour);
                    let dateObject = date.toObject();
                    let minutes = dateObject.minutes;
                    dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
                    this.setData({
                        date: date,
                        dateObject: dateObject,
                        selectTimeRotate: this.getAngleByHour(pHour),
                        AmOrPm: this.getAmOrPm(date)
                    })
                }
            });
        },
        minutetouchmove(e) {
            this.getAngle(e, '.time-minute').then(res => {
                let angle = res;
                let c3 = Math.ceil(angle / 3);
                angle = (c3 - (c3 % 2 === 0 ? 0 : 1)) * 3;
                if (angle !== this.data.selectTimeRotate) {
                    let selectMinute = this.getMinute(angle);
                    selectMinute = (selectMinute > 0 ? selectMinute : 60 + selectMinute) % 60;
                    let date = dayjs(this.data.date.set('minute', selectMinute).toISOString());
                    let dateObject = date.toObject();
                    let minutes = dateObject.minutes;
                    dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
                    this.setData({
                        date: date,
                        dateObject: dateObject,
                        selectTimeRotate: angle
                    })
                }
            });
        },
        hourtap(e) {
            this.getAngle(e, '.time-hour').then(angle => {
                let c15 = Math.ceil(angle / 15);
                c15 = c15 - (c15 % 2 === 0 ? 0 : 1);
                let pHour = c15 / 2;
                if (this.data.AmOrPm === 'PM') {
                    pHour = pHour + 12;
                }
                let date = this.data.date.set('hour', pHour);
                let dateObject = date.toObject();
                let minutes = dateObject.minutes;
                dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
                this.setData({
                    date: date,
                    dateObject: dateObject,
                    selectTimeRotate: this.getAngleByHour(pHour)
                })
            });
        },
        minutetap(e) {
            this.minutetouchmove(e);
        },
        changeView() {
            let minuteView = this.data.minuteView;
            let date = this.data.date;
            this.setData({
                minuteView: !minuteView,
                selectTimeRotate: minuteView ? this.getAngleByHour(date.hour()) : this.getAngleByMinute(date.minute())
            });
        },
        changeViewToHour() {
            let date = this.data.date;
            this.setData({
                minuteView: false,
                selectTimeRotate: this.getAngleByHour(date.hour()),
            });
        },
        changeViewToMinute() {
            let date = this.data.date;
            this.setData({
                minuteView: true,
                selectTimeRotate: this.getAngleByMinute(date.minute())
            });
        },
        changeClockToAM() {
            let date = this.data.date;
            let hour = date.hour();
            if (hour >= 12) {
                hour = hour - 12;
            }
            date = date.set('hour', hour);
            let dateObject = date.toObject();
            let minutes = dateObject.minutes;
            dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
            this.setData({
                date: date,
                dateObject: dateObject,
                AmOrPm: this.getAmOrPm(date)
            });
            if (!this.data.minuteView) {
                this.setData({
                    selectTimeRotate: this.getAngleByHour(hour),
                })
            }
        },
        changeClockToPM() {
            let date = this.data.date;
            let hour = date.hour();
            if (hour <= 12) {
                hour = hour + 12;
            }
            date = date.set('hour', hour);
            let dateObject = date.toObject();
            let minutes = dateObject.minutes;
            dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
            this.setData({
                date: date,
                dateObject: dateObject,
                AmOrPm: this.getAmOrPm(date)
            });
            if (!this.data.minuteView) {
                this.setData({
                    selectTimeRotate: this.getAngleByHour(hour),
                })
            }
        },
        getAmOrPm(date) {
            return date.hour() > 12 ? 'PM' : 'AM'
        },
        getHour(angle) {
            if (this.data.AmOrPm === 'PM') {
                return angle / 30 + 12
            } else {
                return angle / 30
            }
        },
        getMinute(angle) {
            return angle / 6
        },
        getAngleByHour(hour) {
            return hour * 30
        },
        getAngleByMinute(minute) {
            return minute * 6
        },
        _queryMultipleNodes: function (e) {
            return new Promise((resolve) => {
                const query = this.createSelectorQuery();
                query.select(e).boundingClientRect();
                query.exec(res => {
                    resolve(res);
                });
            })
        },
        getAngle(ev, e) {
            return new Promise(resolve => {
                this._queryMultipleNodes(e).then(res => {
                    const {top, left, width} = res[0];
                    const {clientX, clientY} = ev.changedTouches[0];
                    const centerX = left + (width / 2);
                    const centerY = top + (width / 2);
                    let angle = 90 - Math.atan2(centerY - clientY, clientX - centerX) * 180 / Math.PI;
                    resolve(parseInt((angle > 0 ? angle : 360 + angle).toString()));
                });
            });
        },
        _open(o) {
            let d = JSON.parse(JSON.stringify(this.data.defaultOption));
            let options = Object.assign(d, o);
            options.date = options.date || new Date();
            let date = dayjs(options.date);
            let dateObject = date.toObject();
            let minutes = dateObject.minutes;
            dateObject.minutes = minutes.toString().length >= 2 ? minutes : '0' + minutes;
            this.setData({
                date: date,
                dateObject: dateObject,
                selectTimeRotate: this.getAngleByHour(date.hour()),
                AmOrPm: this.getAmOrPm(date),
            });
            this.data.dialog._open();
        },
        _close() {
            this.data.dialog._close();
        },
        _submit() {
            let {years, months, date, hours, minutes, seconds, milliseconds} = this.data.dateObject;
            let dateTem = dayjs();
            dateTem = dateTem.set('year', years).set('month', months).set('date', date).set('hour', hours).set('minute', minutes).set('second', seconds).set('millisecond', milliseconds);
            this.triggerEvent('submit', {value: dateTem.toDate()});
            this._close();
        },
        dialogOpen() {
            this.triggerEvent('open', {bubbles: true});
        },
        dialogClose() {
            this.triggerEvent('close', {bubbles: true});
        },
        dialogOpened() {
            this.triggerEvent('opened', {bubbles: true});
        },
        dialogClosed() {
            this.triggerEvent('closed', {bubbles: true});
        }
    }
});