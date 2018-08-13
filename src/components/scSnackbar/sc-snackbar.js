/**
 * Created by bai on 2018/5/2
 */
Component({
    properties: {},
    data: {
        show: false,
        timer: null,
        defaultOption: {
            timeout: 4000,
            position: 'bottom',
            buttonText: '',
            buttonTextColor: '#90CAF9',
            closeOnButtonClick: false,
            onClick: null,
            onButtonClick: null,
            onOpen: null,
            onOpened: null,
            onClose: null,
            onClosed: null
        },
        snackBarStack: []
    },
    ready() {

    },
    relations: {},
    externalClasses: ['sc-class','sc-button-class'],
    methods: {
        _open(o) {
            let d = JSON.parse(JSON.stringify(this.data.defaultOption));
            let options = Object.assign(d, o);
            const snackBarStack = this.data.snackBarStack;
            snackBarStack.push(options);
            this._openNext();
        },
        _close() {
            this.setData({
                show: false
            });
            const {onClose} = this.data.options;
            if (onClose && typeof onClose === "function") {
                onClose();
            }
            setTimeout(() => {
                const {onClosed} = this.data.options;
                if (onClosed && typeof onClosed === "function") {
                    onClosed();
                }
                this.data.snackBarStack.shift();
                if (this.data.snackBarStack.length > 0) {
                    this._openNext();
                }
            }, 300);
        },
        _openNext() {
            const snackBarStack = this.data.snackBarStack;
            if (snackBarStack.length > 0 && !this.data.show) {
                let options = snackBarStack[0];
                this.setData({
                    options: options,
                    show: true,
                    startTime: Date.parse(new Date())
                });
                const {onOpen, onOpened} = this.data.options;
                if (onOpen && typeof onOpen === "function") {
                    onOpen();
                }
                setTimeout(() => {
                    if (onOpened && typeof onOpened === "function") {
                        onOpened();
                    }
                }, 300);
                this.data.timer = setTimeout(() => {
                    this._close();
                }, options.timeout);
            }
        },
        _btnTap() {
            const {closeOnButtonClick, onButtonClick, timeout} = this.data.options;
            clearTimeout(this.data.timer);
            if (closeOnButtonClick) {
                this._close();
            } else {
                const timeout = timeout - (Date.parse(new Date()) - this.data.startTime);
                this.data.timer = setTimeout(() => {
                    this._close();
                }, (timeout > 0 ? timeout : 0) + 1000);
            }
            if (onButtonClick && typeof onButtonClick === "function") {
                onButtonClick();
            }
        },
        _snackBar() {
            const {onClick} = this.data.options;
            if (onClick && typeof onClick === "function") {
                onClick();
            }
        }
    }
});