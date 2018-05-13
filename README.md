# sc-ui
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
    "sc-button":"scui/dist/components/scButton/sc-button",
    "sc-input":"scui/dist/components/scInput/sc-input",
    "sc-progress":"scui/dist/components/scProgress/sc-progress",
    "sc-textarea":"scui/dist/components/scTextarea/sc-textarea",
    "sc-checkbox":"scui/dist/components/scCheckbox/sc-checkbox",
    "sc-checkbox-group":"lib/scui/dist/components/scCheckboxGroup/sc-checkbox-group",
    "sc-form":"scui/dist/components/scForm/sc-form",
    "sc-switch":"scui/dist/components/scSwitch/sc-switch",
    "sc-radio":"scui/dist/components/scRadio/sc-radio",
    "sc-radio-group":"scui/dist/components/scRadioGroup/sc-radio-group"
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
|  binderror|  Handler |	|当使用开放能力时，发生错误的回调|open-type="launchApp"|
| sc-class| String | | 对sc-button 内的button元素修改样式 注意:sc-btn 为推荐样式||
|ripple | Boolean| true|点击是否有涟漪的效果|


#### 3.2 sc-check-box
##### 注意 请结合 sc-check-box-group 使用
```
<sc-checkbox-group sc-class="sc-checkbox-group-row" bindchange="checkboxChange">
    <sc-checkbox sc-class="sc-checkbox" label="初始选中" checked="{{true}}" value="check1"></sc-checkbox>
    <sc-checkbox sc-class="sc-checkbox" label="初始未选中" checked="{{false}}"  value="check2"></sc-checkbox>
    <sc-checkbox disabled="{{true}}" sc-class="sc-checkbox" label="禁用" checked="{{false}}"></sc-checkbox>
</sc-checkbox-group>
```
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|value |   null |default | \<checkbox/>标识，选中时触发\<sc-checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value ||
| disabled  | Boolean  |	false |	是否禁用 |
| checked  | Boolean  |	false |	当前是否选中，可用来设置默认选中 |
|bindcheckchange|Handle||状态更改时的触发事件|
|sc-class|||建议使用 sc-checkbox样式|
|group上的sc-class|||sc-checkbox-group-row横向的radio组、sc-check-group-column纵向的radio组|

#### 3.3 sc-input
input组件

```
<sc-input sc-class="sc-input" label="测试" bindinput="input"></sc-input>
```

##### 注意 目前label不可和placeholder一起使用

| 属性名  | 类型  |	默认值 |	说明 |		生效时机 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value |   String | | 输入框的初始内容 ||
|type |   String | "text" | input 的类型 ||
|password |   Boolean	 |false | 是否是密码类型 ||
|value |   String | | 输入框的初始内容 ||
|placeholder |   String | | 	输入框为空时占位符 ||
|placeholder-style |   String | | 	指定 placeholder 的样式 ||
|placeholder-class |   String | 	"input-placeholder" | 指定 placeholder 的样式类 ||
|disabled |   Boolean |false | 是否禁用 ||
|maxlength |   Number |140 | 最大输入长度，设置为 -1 的时候不限制最大长度	 ||
|cursor-spacing |   Number |0 | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 ||
|focus	|   	Boolean | 	false| 获取焦点 ||
|confirm-type | String | "done"| 设置键盘右下角按钮的文字 ||
|confirm-hold |   Boolean |false | 	点击键盘右下角按钮时是否保持键盘不收起 ||
|cursor |   Number | | 	指定focus时的光标位置 ||
|selection-start |   	Number | 	-1| 光标起始位置，自动聚集时有效，需与selection-end搭配使用 ||
|selection-end |   	Number |-1 | 		光标结束位置，自动聚集时有效，需与selection-start搭配使用 ||
|adjust-position |   Boolean |	true | 	键盘弹起时，是否自动上推页面 ||
|bindinput |   EventHandle	 | | 	当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 ||
|bindfocus |   EventHandle	 | | 		输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持 ||
|bindblur |   EventHandle	 | | 	输入框失去焦点时触发，event.detail = {value: value} ||
|bindconfirm |   EventHandle | | 		点击完成按钮时触发，event.detail = {value: value} ||
|sc-class|Stirng||对input标签使用的class类 推荐使用 sc-input|
##### 类型等请到 https://developers.weixin.qq.com/miniprogram/dev/component/input.html 比对

#### 3.4 sc-progress
```
 <sc-progress sc-class="sc-progress sc-progress-indeterminate" style="width: 100%" width="{{width}}"></sc-progress>
 <sc-progress sc-class="sc-progress" style="width: 100%" type="determinate" width="{{width}}"></sc-progress>
```
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class  |   | |	对内部元素应用的class名称 使用 sc-progress sc-progress sc-progress-indeterminate 为随机进度条|
|type|determinate||将这个进度条声明为固定进度条 请不要加入 sc-progress-indeterminate类|
|width|number||固定进度条的长度|

#### 3.5 sc-radio
##### 注意 请结合 sc-radio-group 使用
```
 <sc-radio-group bind:change="radioChange">
      <sc-radio style="margin-right: 8px" label="测试" sc-class="sc-radio" checked="{{true}}" value="radio1"></sc-radio>
      <sc-radio style="margin-right: 8px" label="测试" sc-class="sc-radio" value="radio2"></sc-radio>
      <sc-radio style="margin-right: 8px" label="测试" sc-class="sc-radio" checked disabled></sc-radio>
</sc-radio-group>
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |   |	 | radio组change事件|
|sc-class|String || 推荐sc-radio|
|label|String||radio的标签|
|checked|Boolean|false|radio的选中(请不要设置多个，如果有多个则只会设置第一个)|
|value|||chenge事件携带的value|
|disabled|Boolean|false|禁用|

#### 3.6 sc-switch

```
 <sc-switch style="height: 36px" sc-class="sc-switch" bind:change="checkChange"></sc-switch>
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |   |	 | switch change事件|
|sc-class|String || 推荐sc-switch|
|value|||chenge事件携带的value|
|disabled|Boolean|false|禁用|

#### 3.7 st-form

实验中

```
 <sc-form bind:submit="submit" report-submit>
        <sc-input sc-class="sc-input" label="姓名" name="name" bindinput="input"></sc-input>
        <sc-radio-group name="sex">
            <sc-radio style="margin-right: 8px" label="男" sc-class="sc-radio" checked="{{true}}" value="man"></sc-radio>
            <sc-radio style="margin-right: 8px" label="女" sc-class="sc-radio" value="women"></sc-radio>
        </sc-radio-group>
        <sc-checkbox-group name="like" sc-class="sc-checkbox-group-row" bindchange="checkboxChange">
            <sc-checkbox sc-class="sc-checkbox" label="音乐" checked="{{true}}" value="music"></sc-checkbox>
            <sc-checkbox sc-class="sc-checkbox" label="电影" checked="{{false}}" value="movie"></sc-checkbox>
            <sc-checkbox sc-class="sc-checkbox" label="书籍" checked="{{false}}" value="book"></sc-checkbox>
        </sc-checkbox-group>
</sc-form>
```


#### 3.8 sc-textarea
##### 实验中