//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        usage:{
            flatBth:'<sc-button sc-class="sc-btn" flat>NORMAL</sc-button>',
            outlinedBtn:'<sc-button sc-class="sc-btn sc-outlined-btn" flat>normal</sc-button>',
            unelevatedBtn:' <sc-button sc-class="sc-btn">normal</sc-button>',
            raisedBtn:'<sc-button sc-class="sc-btn" raised>NORMAL</sc-button>',
            FABBtn:'<sc-button raised fab>\n' +
            '  <text class="iconfont icon-appreciate" style="color: red"></text>\n' +
            '</sc-button>'
        },
        tip:'您可以通过添加sc-class/class类来重写按钮某些属性'
    },
    onLoad: function () {

    },
    onReady(){

    }
});
