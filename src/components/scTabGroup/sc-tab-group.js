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
        tabIndex:{
            type: Number,
            value:0
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
            type: 'child', // 关联的目标节点应为父节点
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
        _setTab(index){
            this.setData({
                currentTab: index
            });
            if (!(this.data.scrollViewWidth >= (this.data.tabList.length * this.data.btnMinWidth))) {
                this._setScroll(index);
            }
            this._setHeight(index);
            this.triggerEvent('tabchange', {
                value:index,
                data:this.data.tabList[index].data || {}
            })
        },
        _setScroll(idx) {
            const btnStartPosition = idx * this.data.btnMinWidth;
            const btnEndPosition = (idx + 1) * this.data.btnMinWidth;
            const scrollLeft = this.data.scrollLeft;
            const scrollViewWidth = this.data.scrollViewWidth;
            if (btnStartPosition >= scrollLeft && btnEndPosition <= Math.ceil(scrollLeft + scrollViewWidth)) {

            } else {
                if (btnStartPosition <= scrollLeft) {
                    if (idx === 0) {
                        this.setData({
                            scrollLeft: 0
                        });
                    } else {
                        this.setData({
                            scrollLeft: btnStartPosition - (idx > 0 ? 44 : 0)
                        });
                    }

                } else {
                    this.setData({
                        scrollLeft: scrollLeft + btnEndPosition - (scrollLeft + scrollViewWidth) + ((idx + 1) < this.data.tabList.length ? 44 : 0)
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
            if (this.data.touchMoveStartX) {
                this.data.touchMoveEndX = e.touches[0].clientX;
            } else {
                this.data.touchMoveStartX = e.touches[0].clientX;
            }
        },
        _touchend(e) {
            const touchMoveX = this.data.touchMoveEndX - this.data.touchMoveStartX;
            const currentTab = this.data.currentTab;
            const moveLength = this.data.moveLength;
            this.setData({
                touchMoveEndX: null,
                touchMoveStartX: null
            });
            if (Math.abs(touchMoveX) > moveLength) {
                if(touchMoveX >= 0){
                    this.setData({
                        currentTab: currentTab - 1 >= 0 ? currentTab - 1 : 0
                    });
                }else{
                    this.setData({
                        currentTab: currentTab + 1 < this.properties.tabList.length ? currentTab + 1 : currentTab
                    });
                }
                if(currentTab !== this.data.currentTab){
                    if (!(this.data.scrollViewWidth >= (this.data.tabList.length * this.data.btnMinWidth))) {
                        this._setScroll(this.data.currentTab);
                    }
                    this._setHeight(this.data.currentTab);
                    this.triggerEvent('tabchange', {
                        value:this.data.currentTab,
                        data:this.data.tabList[this.data.currentTab].data || {}
                    })
                }
            }
        },
        _scroll(e) {
            this.data.scrollLeft = e.detail.scrollLeft
        },
        _getAllTab: function () {
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            return this.getRelationNodes('../scTab/sc-tab')
        }
    }
});