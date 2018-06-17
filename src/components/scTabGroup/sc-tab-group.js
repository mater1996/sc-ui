/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {
        ripple: {
            type: Boolean,
            value: true
        },
        tabList: {
            type: Array
        },
        tabIndex: {
            type: Number,
            value: 0
        }
    },
    data: {
        currentTab: 0,
        touchMoveStartX: 0,
        touchMoveEndX: 0,
        btnMinWidth: 88,
        scrollLeft: 0,
        scroll: 0,
        scrollViewWidth: 0,
        moveLength: 64
    },
    relations: {
        '../scTab/sc-tab': {
            type: 'child',
        }
    },
    ready() {
        this._queryMultipleNodes('.tab-bar').then(res => {
            this.data.scrollViewWidth = res[0].width;
        });
        this.data.tabs = this._getAllTab();
        this._setTab(this.properties.tabIndex);
    },
    // externalClasses: ['sc-class','sc-ripple-class'],
    methods: {
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
        _tabBarTap: function (e) {
            let idx = e.target.dataset.idx;
            if (this.data.currentTab !== idx) {
                this._setTab(idx);
            }
        },
        _setTab(index) {
            const {scrollViewWidth, btnMinWidth} = this.data;
            this.setData({
                currentTab: index
            });
            if (!(scrollViewWidth >= (this.data.tabList.length * btnMinWidth))) {
                this._setScroll(index);
            }
            this._setHeight(index);
            this.triggerEvent('tabchange', {
                value: index,
                data: this.data.tabList[index].data || {}
            })
        },
        _setScroll(idx) {
            const {scrollLeft, scrollViewWidth, btnMinWidth} = this.data;
            const btnStartPosition = idx * btnMinWidth;
            const btnEndPosition = (idx + 1) * btnMinWidth;

            if (btnStartPosition >= scrollLeft && btnEndPosition <= Math.ceil(scrollLeft + scrollViewWidth)) {
                // btn在窗口内
            } else {
                if (btnStartPosition <= scrollLeft) {
                    this.setData({
                        scrollLeft: idx === 0 ? 0 : (btnStartPosition - (idx > 0 ? btnMinWidth / 2 : 0))
                    });
                } else {
                    this.setData({
                        scrollLeft: scrollLeft + btnEndPosition - (scrollLeft + scrollViewWidth) + ((idx + 1) < this.data.tabList.length ? btnMinWidth / 2 : 0)
                    });
                }
            }
        },
        _setHeight(idx) {
            let tabs = this.data.tabs;
            setTimeout(() => {
                for (let i = 0; i < tabs.length; i++) {
                    if (i === idx) {
                        tabs[i].setData({
                            tabHeight: 'auto'
                        })
                    } else {
                        tabs[i].setData({
                            tabHeight: 0
                        })
                    }
                }
            }, 150);
        },
        _touchmove(e) {
            let {touchMoveStartX} = this.data;
            if (touchMoveStartX) {
                this.setData({
                    touchMoveEndX: e.touches[0].clientX
                });
            } else {
                this.setData({
                    touchMoveStartX: e.touches[0].clientX
                })
            }
        },
        _touchend(e) {
            const {touchMoveStartX, touchMoveEndX, currentTab, moveLength, scrollViewWidth, btnMinWidth} = this.data;
            const tabLength = this.properties.tabList.length;
            const touchMoveX = touchMoveEndX - touchMoveStartX;
            this.setData({
                touchMoveEndX: 0,
                touchMoveStartX: 0
            });
            if (Math.abs(touchMoveX) > moveLength) {
                if (touchMoveX >= 0) {
                    this.setData({
                        currentTab: currentTab - 1 >= 0 ? currentTab - 1 : 0
                    });
                } else {
                    this.setData({
                        currentTab: currentTab + 1 < tabLength ? currentTab + 1 : currentTab
                    });
                }
                let ct = this.data.currentTab;
                if (currentTab !== ct) {
                    if (!(scrollViewWidth >= (tabLength * btnMinWidth))) {
                        this._setScroll(ct);
                    }
                    this._setHeight(ct);
                    this.triggerEvent('tabchange', {
                        value: ct,
                        data: this.data.tabList[ct].data || {}
                    })
                }
            }
        },
        _scroll(e) {
            this.data.scrollLeft = e.detail.scrollLeft
        },
        _getAllTab: function () {
            return this.getRelationNodes('../scTab/sc-tab')
        }
    }
});