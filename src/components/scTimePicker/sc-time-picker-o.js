/**
 * Created by bai on 2018/6/30
 */

const TimePicker = (function () {
    let TimePicker = function (id) {
        this.id = id || null;
        if (this.id) {
            const pages = getCurrentPages();
            const pageCtx = pages[pages.length - 1];
            this.timePicker = pageCtx.selectComponent(this.id);
            if (this.timePicker) {
                return this;
            } else {
                throw new Error('no this id of sc-time-picker');
            }
        }
    };
    TimePicker.prototype.open = function (options) {
        this.timePicker._open(options);
        return this;
    };
    TimePicker.prototype.close = function () {
        this.timePicker._close();
        return this;
    };
    return function (id) {
        return new TimePicker(id);
    }
}());

module.exports = TimePicker;