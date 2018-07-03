/**
 * Created by bai on 2018/6/30
 */

const SnackBar = (function () {
    let SnackBar = function (id) {
        this.id = id || null;
        if (this.id) {
            const pages = getCurrentPages();
            const pageCtx = pages[pages.length - 1];
            this.snackBar = pageCtx.selectComponent(this.id);
            if (this.snackBar) {
                return this;
            } else {
                throw new Error('no this id of sc-dialog');
            }
        }
    };
    SnackBar.prototype.open = function (options) {
        this.snackBar._open(options);
        return this;
    };
    SnackBar.prototype.close = function () {
        this.snackBar._close();
        return this;
    };
    return function (id) {
        return new SnackBar(id);
    }
}());

module.exports = SnackBar;