/**
 * Created by bai on 2018/6/30
 */

const DatePicker = (function () {
    let DatePicker = function (id) {
        this.id = id || null;
        if (this.id) {
            const pages = getCurrentPages();
            const pageCtx = pages[pages.length - 1];
            this.datePicker = pageCtx.selectComponent(this.id);
            if (this.datePicker) {
                return this;
            } else {
                throw new Error('no this id of sc-date-picker');
            }
        }
    };
    DatePicker.prototype.open = function (options) {
        this.datePicker._open(options);
        return this;
    };
    DatePicker.prototype.close = function () {
        this.datePicker._close();
        return this;
    };
    return function (id) {
        return new DatePicker(id);
    }
}());

module.exports = DatePicker;