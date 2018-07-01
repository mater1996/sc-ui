/**
 * Created by bai on 2018/6/30
 */

const Dialog = (function () {
    let Dialog = function (id) {
        this.id = id || null;
        if (this.id) {
            const pages = getCurrentPages();
            const pageCtx = pages[pages.length - 1];
            console.log(pageCtx);
            // pageCtx.onPageScroll = function (e) {
            //     console.log(e);
            // }
            // pageCtx.__proto__.onPageScroll = function (e) {
            //     console.log(e);
            // }
            this.dialog = pageCtx.selectComponent(this.id);
            if (this.dialog) {
                return this;
            } else {
                throw new Error('no this id of sc-dialog');
            }
        }
    };
    Dialog.prototype.open = function () {
        const dialog = this.dialog;
        dialog.setData({
            show: true,
            opening: true
        });
        dialog.triggerEvent('open', {});
        return this;
    };
    Dialog.prototype.close = function () {
        const dialog = this.dialog;
        dialog.setData({
            closing: true,
        });
        dialog.triggerEvent('close', {});
        return this;
    };
    Dialog.prototype.toggle = function () {
        return this.dialog.data.opened ? this.close() : this.open();
    };
    return function (id) {
        return new Dialog(id);
    }
}());

module.exports = Dialog;