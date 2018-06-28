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
        moveLength: 64,
        allTabItem: [],
        tabDriverWidth:0,
        tabDriverLeft:0,
        isUnEqualNextWidth:false
    },
    relations: {
        '../scTab/sc-tab': {
            type: 'child',
        }
    },
    ready() {
        this._queryMultipleNodes('#sc-tab').then(res => {
            this.data.scrollViewWidth = res[0].width;
            this._queryAllNodes('.tab-bar-item').then(res => {
                const allTabItem = this.data.allTabItem = res;
                this.data.tabStartPosition = allTabItem[0].left;
                this.data.tabEndPosition = allTabItem[allTabItem.length - 1].right;
                this.data.tabListWinth = this.data.tabEndPosition - this.data.tabStartPosition;
                this.data.tabs = this._getAllTab();
                this._setTab(this.properties.tabIndex || 0);
            });
        });
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
        _queryAllNodes(e) {
            return new Promise((resolve, reject) => {
                const query = this.createSelectorQuery();
                query.selectAll(e).boundingClientRect();
                query.exec(function (res) {
                    resolve(res[0]);
                });
            })
        },
        _tabBarTap: function (e) {
            let idx = e.target.dataset.idx;
            if (this.data.currentTab !== idx) {
                const {width:currentTabWidth} = this.data.allTabItem[this.data.currentTab];
                const {width} = this.data.allTabItem[idx];
                this.setData({
                    isUnEqualNextWidth:currentTabWidth !==width,
                    currentTab: idx
                });
                this._setTab(idx);
            }
        },
        _setTab(index) {
            const {scrollViewWidth} = this.data;
            if (scrollViewWidth < this.data.tabListWinth) {
                this._setScroll(index);
            }else{
                const nextTab = this.data.allTabItem[index];
                const {left: btnStartPosition, width} = nextTab;
                this.setData({
                    tabDriverWidth: width,
                    tabDriverLeft: btnStartPosition - this.data.tabStartPosition
                });
            }
            this._setHeight(index);
            this.triggerEvent('tabchange', {
                value: index,
                data: this.data.tabList[index].data || {}
            })
        },
        _setScroll(idx) {
            const {scrollLeft, scrollViewWidth, tabStartPosition} = this.data;
            const nextTab = this.data.allTabItem[idx];
            const {left: btnStartPosition, right: btnEndPosition, width} = nextTab;
            this.setData({
                tabDriverWidth: width,
                tabDriverLeft: btnStartPosition - tabStartPosition
            });

            if (btnStartPosition >= scrollLeft+tabStartPosition && btnEndPosition <= Math.ceil(scrollLeft + scrollViewWidth + tabStartPosition)) {

            } else {
                if (btnStartPosition-tabStartPosition <= scrollLeft) {
                    this.setData({
                        scrollLeft: idx === 0 ? 0 : (btnStartPosition - tabStartPosition - (idx > 0 ? (this.data.allTabItem[idx - 1].width / 2) : 0)),
                    });
                } else {
                    this.setData({
                        scrollLeft: btnEndPosition - scrollViewWidth - tabStartPosition + ((idx + 1) < this.data.tabList.length ? (this.data.allTabItem[idx + 1].width / 2) : 0),
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
        _touchStart(e) {
            this.setData({
                touchMoveStartX: e.touches[0].clientX
            });
        },
        _touchEnd(e) {
            if (e.changedTouches.length === 1) {
                const {currentTab, moveLength, scrollViewWidth, btnMinWidth} = this.data;
                const tabLength = this.properties.tabList.length;
                const touchMoveX = e.changedTouches[0].clientX - this.data.touchMoveStartX;
                this.setData({
                    touchMoveEndX: 0
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
                        const {width:currentTabWidth} = this.data.allTabItem[currentTab];
                        const nextTab = this.data.allTabItem[ct];
                        const {left: btnStartPosition, width} = nextTab;
                        this.setData({
                            isUnEqualNextWidth:currentTabWidth !==width,
                        });
                        if (!(scrollViewWidth >= (tabLength * btnMinWidth))) {
                            this._setScroll(ct);
                        }else{
                            this.setData({
                                tabDriverWidth: width,
                                tabDriverLeft: btnStartPosition - this.data.tabStartPosition
                            });
                        }
                        this._setHeight(ct);
                        this.triggerEvent('tabchange', {
                            value: ct,
                            data: this.data.tabList[ct].data || {}
                        })
                    }
                }
            }
        },
        _scroll(e) {
            this.data.scrollLeft = e.detail.scrollLeft;
        },
        _getAllTab: function () {
            return this.getRelationNodes('../scTab/sc-tab')
        }
    }
});