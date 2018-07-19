# sc-ui
=======
微信小程序material ui
此ui为参加高校小程序设计，请勿做商用
利用此ui设计的小程序已完成 欢迎大家前往观看

[鲸猫兼职小程序](https://v.qq.com/x/page/m0682e7bjon.html)

小程序代码片段：wechatide://minicode/bGhfWdm77WGd (请复制到自己的开发工具打开)

![img](https://cdn.rawgit.com/xbup/sc-ui/104ff7c2/test.gif)

## get start
##### 下载：目前不支持npm install 请直接clone或下载

### 1. 引入文件
在app.wxss下引用
```
@import "scui/dist/sc-ui.wxss";
@import "scui/dist/assets/font-icon/font-icon.wxss";
```

在要使用的页面中注册组件
```json
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

图标库
http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=33

### 2. 使用

##### 示例 button 使用
```html
<sc-button sc-class="sc-btn box-shadow-9 new-color" style="display: inline-block;margin-right: 16px"
                       open-type="getUserInfo" bind:getuserinfo="getUserInfo">
                普通
 </sc-button>
```

- sc-class 为在button元素上直接应用的class
- 其他与微信小程序上的指令相同

### 3. 组件

#### 3.1. sc-button

```json
"usingComponents":{
  "sc-button":"path/to/dist/components/scButton/sc-button"
}
```

```html
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
|  form-type|  String	 || 此选项组件不可用,请使用sc-form来修正 |
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

##### 颜色：可以设置.sc-btn的background-color 来改变按钮的颜色

#### 3.2 sc-check-box
##### 注意 请结合 sc-check-box-group 使用

```json
"usingComponents":{
  "sc-check-box":"path/to/dist/components/scCheckBox/sc-check-box",
  "sc-check-box-group":"path/to/dist/components/scCheckBoxGroup/sc-check-box-group"
}
```

```html
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
|color|String||内部icon的颜色|
|sc-class|||建议使用 sc-checkbox样式|
|group上的sc-class|||sc-checkbox-group-row横向的radio组、sc-check-group-column纵向的radio组|

#### 3.3 sc-input

```json
"usingComponents":{
  "sc-input":"path/to/dist/components/scInput/sc-input"
}
```

```html
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
|name|Stirng||配合sc-form使用时提交获得的key|
|sc-class|Stirng||对input标签使用的class类 推荐使用 sc-input|
|regex|Boolean||一个正则表达式 会覆盖inputType|
|inputType|String||ui内置的正则验证 目前只有phone验证|
|err-status|Boolean||是否进行错误提示|
|err-text|Stirng||错误提示文本（当输入的值不符合正则表达式或inputType时的提示文本）|
|with-icon|Boolean||是由创建带有图标的输入框|
|icon|String||图标的类例如 iconfont icon-phone(这里是图标库的字体图标)|
##### 类型等请到 https://developers.weixin.qq.com/miniprogram/dev/component/input.html 比对

##### 颜色：可以设置.sc-input::before 的background-color 来改变边框的颜色 或者border 来改变宽度等其他属性（不建议修改）

#### 3.4 sc-progress

```json
"usingComponents":{
  "sc-progress":"path/to/dist/components/scProgress/sc-progress"
}
```

```html
 <sc-progress sc-class="sc-progress sc-progress-indeterminate" style="width: 100%" width="{{width}}"></sc-progress>
 <sc-progress sc-class="sc-progress" style="width: 100%" type="determinate" width="{{width}}"></sc-progress>
```
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class  |   | |	对内部元素应用的class名称 使用 sc-progress sc-progress sc-progress-indeterminate 为随机进度条|
|type|determinate||将这个进度条声明为固定进度条 请不要加入 sc-progress-indeterminate类|
|width|number||固定进度条的长度|
##### 颜色：可以设置sc-progress 或 sc-progress-indeterminate 的 background-color 来改变进度条的颜色

#### 3.5 sc-radio
##### 注意 请结合 sc-radio-group 使用

```json
"usingComponents":{
  "sc-radio":"path/to/dist/components/scRadio/sc-radio"
}
```

```html
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
|color|String|HEX或rgb|#ff4081|radio的颜色|
|disabled|Boolean|false|禁用|

#### 3.6 sc-switch
```json
"usingComponents":{
  "sc-switch":"path/to/dist/components/scSwitch/sc-switch"
}
```

```html
 <sc-switch style="height: 36px" sc-class="sc-switch" bind:change="checkChange"></sc-switch>
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |   |	 | switch change事件|
|sc-class|String || 推荐sc-switch|
|value|||chenge事件携带的value|
|color|String|颜色|#ff4081|switch的颜色|
|disabled|Boolean|false|禁用|


#### 3.7 sc-cell
可以不和sc-cell-group联合使用

```json
"usingComponents":{
  "sc-cell":"path/to/dist/components/scCell/sc-cell"
}
```

```html
<sc-cell-group>
    <sc-cell sub-header="subheader" ripple="{{false}}">header</sc-cell>
    <sc-cell left-icon="iconfont icon-phone">header</sc-cell>
    <sc-cell right-icon="iconfont icon-right" right-text="右侧">header</sc-cell>
    <sc-cell switch ripple="{{false}}" value="cellSwitch" checked bind:cellSwitchChange="cellChange">header</sc-cell>
</sc-cell-group>
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| slot| String  |	 | 主标题|
| sub-header|   |	 | 子标题|
|sc-class|String || 推荐sc-cell|
|ripple|||是否有涟漪效果,在含有switch的时候建议关闭|
|switch|Boolean|false|启用带switch的cell|
|cellSwitchChange|handler||switch改变的触发事件|
|left-icon|String||左侧图标  assets/fonticon的图标  例如iconfont icon-phoe|
|right-icon|String||右侧图标|
|right-text|String||右侧文字,在图标左侧|

#### 3.8 st-form
```json
"usingComponents":{
  "sc-form":"path/to/dist/components/scForm/sc-form"
}
```
###### 注意 如果声明report-submit sc-form会自带一个提交按钮（可以设置文本）

当点击提交按钮触发submit时会把内部的input/check/radio/textarea/swich 分别以name:value的形式以对象的形式返回

所以sc-form内请务必将每个表单控件的name声明，否则name将会默认为控件名称+id

```html
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

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:submit| handler  |	 | 提交事件,携带formId|
| report-submit| Boolean  |	false |与上面的事件配合使用|
|sc-class|String||form表的内部样式|
|submit-btn-class|String||form表中的提交btn的样式|
|submit-text|String|提交|提交按钮的文本|

#### 3.9 sc-textarea
```json
"usingComponents":{
  "sc-textarea":"path/to/dist/components/scTextarea/sc-textarea"
}
```

```html
<sc-textarea></sc-textarea>
```
属性与sc-input 一致

#### 3.10 sc-tab
```json
"usingComponents":{
  "sc-tab-group":"path/to/dist/components/scTabGroup/sc-tab-group",
  "sc-tab":"path/to/dist/components/scTab/sc-tab"
}
```

```html
<sc-tab-group tab-list="{{tabList}}">
   <sc-tab>111</sc-tab>
   <sc-tab>222</sc-tab>
   <sc-tab>333</sc-tab>
</sc-tab-group>
```

```js
Page({
  data: {
          motto: 'scui test',
          width: 100,
          tabList: [
              {
                  label: '已申请',
                  id: 'waiting',
                  name: 'waiting'
              }, {
                  label: '已通过1111111111111111',
                  id: 'passed',
                  name: 'passed'
              }, {
                  label: '已失败',
                  id: 'fail',
                  name: 'fail'
              },
              {
                  label: '已取消',
                  id: 'cancel',
                  name: 'cancel'
              }],
      }
 })
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| tab-list| array  |	 | 渲染的tab列表必须和内部的sc-tab对应 是一个对象数组每个对象包含 label,id,以及data|
| tab-change| handler| | tab更换时触发的事件 在e.detail 里返回当前的tabIndex以及data
|tabIndex|Number|0|初始化的tab位置从0开始|

#### 3.11 sc-dialog
```json
"usingComponents":{
  "sc-dialog":"path/to/dist/components/scDialog/sc-dialog"
}
```

```html
<view>
   <sc-button sc-class="sc-btn" bind:tap="openDialog">打开/关闭</sc-button>
   <sc-dialog id="dialog" sc-class="box-shadow-8"
        bind:open="dialogOpen"
        bind:opened="dialogOpened"
        bind:close="dialogClose"
        bind:closed="dialogClosed">
      <sc-button sc-class="sc-btn" bind:tap="closeDialog">打开/关闭</sc-button>
   </sc-dialog>
 </view>
```

```js
const scui = require('path/to/dist/sc-ui');
Page({
  onReady(){
    this.data.dialog = scui.Dialog("#dialog");
  },
  openDialog(){
    this.data.dialog.toggle();
    //this.data.dialog.open();
  },
  closeDialog(){
    this.data.dialog.toggle();
    //this.data.dialog.close();
  },
  dialogOpen(){
    // 请务必在这里将您的页面的根元素的overflow设置为hidden
    console.log("模态框打开中");
  },
  dialogClose(){
    // 请务必在这里将您的页面的根元素的overflow设置为auto
    console.log("模态框关闭中");
  },
  dialogOpened(){
    console.log("模态框已打开");
  },
  dialogClosed(){
    console.log("模态框已关闭");
  }
})
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| id| String  |	 | 每个dialog必须提供一个id且不能重复|
| sc-class| String| | dialog内容的样式
|overlay|Bollean|true|是否显示遮罩|
|overlay-close|Bollean|true|点击遮罩是否关闭模态框|
|open|handler||模态框打开且处于动画状态的事件|
|opened|handler||模态框打开事件|
|close|handler||模态框关闭且处于动画状态的事件|
|closed|handler||模态框关闭事件|

#### 3.12 sc-snackbar

```json
"usingComponents":{
  "sc-snackbar":"path/to/dist/components/scSnackbar/sc-snackbar"
}
```

```html
<sc-snackbar id="snackbar">这是一个snackbar</sc-snackbar>
```

```js
const scui = require("path/to/dist/scui");
Page({
  onReady(){
    this.data.snackBar = scui.SnackBar("#snackbar");
  }
  openSnackBar(){
    this.data.snackBar.open({
      message:'snackbar',         // snackbar上的文字
      timeout: 4000,              // snackbar关闭时间
      buttonText:'点我',          //按钮上的文字
      buttonTextColor:'red',      //按钮文字的颜色
      closeOnButtonClick:true,    //是否点击按钮关闭snackbar
      onClick:() => {             //点击snackbar时触发的事件
        console.log('点击button');
      },
      onButtonClick:() => {       //点击snacbar上的按钮上触发的事件
        console.log('点击button');
      },
      onOpen:() => {              //snackbar开启处于动画时触发的事件
        console.log('snackBar打开中');
      },
      onOpened(){                 // snackbar已开启时触发的事件
        console.log('snackBar已打开');
      },
      onClose(){                  // snackbar关闭处于动画时触发的事件
        console.log('snackBar关闭中');
      },
      onClosed(){                 // snackbar已关闭触发的事件
        console.log('snackBar已关闭');
      }
    });
  }
})
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| id| String  |	 | 一个页面最好只使用一个snackbar 必须提供一个id|
| sc-class| String| | snackbar的样式

#### 3.13 sc-date-picker

```json
"usingComponents":{
  "sc-date-picker":"path/to/dist/components/scDatePicker/sc-date-picker"
}
```

```html
<sc-date-picker id="datepicker"></sc-date-picker>
```

```js
const scui = require("path/to/dist/scui");
Page({
  onReady(){
    this.data.datePicker = scui.DatePicker("#datepicker");
  }
  openSnackBar(){
    this.data.datePicker.open({
      date:"2018-7-05"       //初始化时间否则为当前时间
    });
  }
})
```

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| id| String  |	 | 一个页面最好只使用一个datepicker 必须提供一个id|
| open| handler  |	 |日期选择器打开事件|
| close| String  |	 | 日期选择器关闭事件|
| submit| String  |	 | 日期选择器提交事件, 请从event.detail.value中获取|
