# sc-ui
<<<<<<< HEAD


给个赞
=======
微信小程序material ui

## get start
##### 下载：目前不支持npm install 请直接clone或下载
### 1. 引入文件
在app.wxss下引用
```
@import "scui/dist/sc-ui.wxss";
@import "scui/dist/assets/font-icon/font-icon.wxss";
```

在要使用的页面中注册组件
```
  "usingComponents":{
    "sc-button":"../../assets/lib/scui/dist/components/scButton/sc-button",
    "sc-input":"../../assets/lib/scui/dist/components/scInput/sc-input",
    "sc-progress":"../../assets/lib/scui/dist/components/scProgress/sc-progress",
    "sc-textarea":"../../assets/lib/scui/dist/components/scTextarea/sc-textarea",
    "sc-checkbox":"../../assets/lib/scui/dist/components/scCheckbox/sc-checkbox",
    "sc-checkbox-group":"../../assets/lib/scui/dist/components/scCheckboxGroup/sc-checkbox-group",
    "sc-form":"../../assets/lib/scui/dist/components/scForm/sc-form",
    "sc-switch":"../../assets/lib/scui/dist/components/scSwitch/sc-switch",
    "sc-radio":"../../assets/lib/scui/dist/components/scRadio/sc-radio",
    "sc-radio-group":"../../assets/lib/scui/dist/components/scRadioGroup/sc-radio-group"
  }
```

### 2. 使用

##### 示例 button 使用
```
<sc-button sc-class="sc-btn box-shadow-9 new-color" style="display: inline-block;margin-right: 16px"
                       open-type="getUserInfo" bind:getuserinfo="getUserInfo">
                普通
 </sc-button>
```

- sc-class 为在button元素上直接应用的class
- 其他与微信小程序上的指令相同

### 3. 组件

#### 3.1. sc-button
```
<sc-button sc-class="sc-btn box-shadow-9 new-color" style="display: inline-block;margin-right: 16px"
                       open-type="getUserInfo" bind:getuserinfo="getUserInfo">
                普通
 </sc-button>
```

| 属性名  | 类型  |	默认值 |	说明 |		生效时机 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|size |   String |default | 按钮的大小 ||
|  type |  String |default |按钮的样式类型|
|  plain |   Boolean|false|按钮是否镂空，背景色透明	|
|  disabled|  Boolean |false|是否禁用|
|  loading|  Boolean |false|名称前是否带 loading 图标|
|  disabled|  Boolean |false|是否禁用|
|  form-type|  String	 ||用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件|
|  open-type|  String	 ||	微信开放能力|
|  app-parameter|  String	 ||打开 APP 时，向 APP 传递的参数|	open-type="launchApp"|
|  disabled|  Boolean |false|是否禁用|
|  disabled|  Boolean |false|是否禁用|
|  hover-class	|  String |button-hover|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果|
|  hover-stop-propagation|  Boolean |false|	指定是否阻止本节点的祖先节点出现点击态|
|  hover-start-time|  Number |20|按住后多久出现点击态，单位毫秒|
| hover-stay-time|  Number |70|手指松开后点击态保留时间，单位毫秒|
|  bindgetuserinfo|  Handler ||用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo|open-type="getUserInfo"|
| session-from|  String ||会话来源|open-type="contact"|
|  send-message-title|  String |当前标题|会话内消息卡片标题|open-type="contact"|
|  send-message-path|  String |当前分享路径|会话内消息卡片点击跳转小程序路径|open-type="contact"|
|  send-message-img|  String |截图|会话内消息卡片图片|open-type="contact"|
|  show-message-card|  Handler ||客服消息回调|open-type="contact"|
| bindcontact|  String |当前分享路径|会话内消息卡片点击跳转小程序路径|open-type="contact"|
|  bindgetphonenumber|  Handler |	|获取用户手机号回调|open-type="getphonenumber"|
|  binderror|  Handler |	Handler|当使用开放能力时，发生错误的回调|open-type="launchApp"|

























>>>>>>> dev
