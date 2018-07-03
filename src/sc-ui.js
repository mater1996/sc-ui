/**
 * Created by bai on 2018/5/7
 */

const config = require('./config/config');
const Dialog = require('./components/scDialog/sc-dialog-o');
const SnackBar = require('./components/scSnackbar/sc-snackbar-o');
const scui = {};

Object.defineProperty(scui, 'version', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: config.version
});

module.exports = (function (scui) {
    scui = scui || {};
    scui.Dialog = Dialog;
    scui.SnackBar = SnackBar;
    return scui;
})(scui);