/**
 * Created by bai on 2018/5/2
 */
Component({
    properties: {
        overlay: {
            type: Boolean,
            value: true
        },
        overlayClose: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'fadeIn fadeOut'
        }
    },
    data: {
        show: false,
        opened: false,
        opening: false,
        closed: true,
        closing: false,
        allowScroll: true,
        scrollHeight: 'auto',
        transitionO: {
            'fadeIn': 'sc-mask-fadeIn',
            'fadeOut': 'sc-mask-fadeOut',
            'slideTopIn': 'sc-dialog-slideTopIn',
            'slideTopOut': 'sc-dialog-slideTopOut',
            'slideBottomIn': 'sc-dialog-slideBottomIn',
            'slideBottomOut': 'sc-dialog-slideBottomOut',
            'slideLeftIn': 'sc-dialog-slideLeftIn',
            'slideLeftOut': 'sc-dialog-slideLeftOut',
            'slideRightIn': 'sc-dialog-slideRightIn',
            'slideRightOut': 'sc-dialog-slideRightOut'
        },
        tin: null,
        tout: null
    },
    ready() {
        const [tin, tout] = this.properties.transition.split(' ');
        const transitionO = this.data.transitionO;
        this.setData({
            tin: transitionO[tin],
            tout: transitionO[tout]
        })
    },
    relations: {},
    externalClasses: ['sc-class'],
    methods: {
        _catchtouchmove() {
            return true;
        },
        _closeDialog() {
            this.setData({
                closing: true,
            });
            this.triggerEvent('close', {});
        },
        _animationend(e) {
            const animationName = e.detail.animationName;
            if (animationName === 'dialogFadeIn' || animationName === 'maskFadeIn') {
                this._queryMultipleNodes('.dialog > .sc-dialog').then(res => {
                    this.setData({
                        scrollHeight: res[0].height + 'px',
                        opening: false,
                        opened: true,
                        closed: false
                    });
                    this.triggerEvent('opened', {});
                });
            }
            if (animationName === 'dialogFadeOut' || animationName === 'maskFadeOut') {
                this.setData({
                    closing: false,
                    closed: true,
                    opened: false,
                    show: false
                });
                this.triggerEvent('closed', {});
            }
        },
        _queryMultipleNodes: function (e) {
            return new Promise((resolve, reject) => {
                const query = wx.createSelectorQuery().in(this);
                query.select(e).boundingClientRect();
                query.exec(function (res) {
                    resolve(res);
                });
            })
        },
    }
});