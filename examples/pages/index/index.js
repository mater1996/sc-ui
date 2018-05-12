//index.js
//获取应用实例
const app = getApp();

Page({
    data: {
        motto: '主页',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        size:'default',
        width:10,
        checked:true
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onReady() {
        // let query = wx.createSelectorQuery()
        // query.selectAll('.sc-button').boundingClientRect((res) => {
        //     console.log(res);
        // }).exec();
        // app.scui.scButton.init.call(this);
    },
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.detail.userInfo
        this.setData({
            userInfo: e.detail.detail.userInfo,
            hasUserInfo: true
        })
    },
    uploadFile() {
        app.wxapi.chooseImage({
            count: 9, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        }).then(function (res) {
            let tempFilePaths = res.tempFilePaths;
            // wx.previewImage({
            //     current: tempFilePaths[0], // 当前显示图片的http链接
            //     urls: tempFilePaths // 需要预览的图片http链接列表
            // })
            app.wxapi.uploadManyFile({
                url: 'https://file.pushy.site/api/uploads', //仅为示例，非真实的接口地址
                name: 'file',
                header: {
                    "Content-Type": "multipart/form-data"
                },
                formData: {},
            }, tempFilePaths).then(function (res) {
                console.log(res);
            }).catch(err => {
                // 出现错误了
            })
        }).catch(err => {
            // 出现错误了
        })
    },
    getBth(e){
        console.log(e)
    },
    input(){
        console.log(1111111111)
    },
    add(){
        this.setData({
            width:++this.data.width
        })
    },
    checkboxChange(e){
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    radioChange(e){
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    submit(e){
        console.log('表单提交，携带value值为：', e.detail.value)
    }
});
