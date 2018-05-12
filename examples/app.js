const config = require('./config/config');
const helper = require('./utils/helper');
const request = require('./utils/request');
const wxapi = require('./utils/wxapi');

App({
    // 注册全局函数/属性
    config: config,
    helper: helper,
    request: request,
    wxapi:wxapi,
    // 初始化函数
    onLaunch: function (options) {
        // 登录
        wx.login({
            success: res => {
                console.log(res);
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
                console.log(res);
                if (res.authSetting['scope.userInfo']) {
                    // 即将取消getUserInfo这个函数可用按钮换取
                    // wx.getUserInfo({
                    //     success: res => {
                    //         // 可以将 res 发送给后台解码出 unionId
                    //         this.globalData.userInfo = res.userInfo;
                    //         // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    //         // 所以此处加入 callback 以防止这种情况
                    //         if (this.userInfoReadyCallback) {
                    //             this.userInfoReadyCallback(res);
                    //         }
                    //     }
                    // })
                    // 应该从这里弹框获取用户许可然后获取用户信息
                } else {
                    // 应该显示按钮提示用户登录并进行授权
                    console.log('用户未授权可以获取信息', this.globalData);
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: res => {
                            console.log('用户已授权',res);
                            wx.getUserInfo({
                                success: res => {
                                    // 可以将 res 发送给后台解码出 unionId
                                    this.globalData.userInfo = res.userInfo;
                                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                                    // 所以此处加入 callback 以防止这种情况
                                    if (this.userInfoReadyCallback) {
                                        this.userInfoReadyCallback(res);
                                    }
                                }
                            });
                        }
                    })

                }
            }
        })
    },
    // 显示函数
    onShow: function (options) {

    },
    // 小程序隐藏函数
    onHide: function () {

    },
    // 错误函数
    onError: function (msg) {

    },
    // 页面不存在404函数
    onPageNotFound: function () {

    },
    globalData: {
        userInfo: null,
    }
});