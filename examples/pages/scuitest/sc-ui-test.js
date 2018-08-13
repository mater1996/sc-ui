//index.js
//获取应用实例

Page({
    data: {

    },
    onLoad: function () {

    },
    goPage(e){
        console.log(e);
        wx.navigateTo({
            url:e.target.dataset.url
        })
    }
});
