### 文本框

##### 注入组件

```json
"usingComponents":{
  "sc-input":"path/to/dist/components/scInput/sc-input",
  "sc-textarea":"path/to/dist/components/scTextarea/sc-textarea"
}
```

##### 使用

#### 1. sc-input
```html
<sc-input sc-class="sc-input" label="浮动标签" bindinput="input"></sc-input>
```

##### 属性

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
|float|Boolean|true|是否在输入框聚焦时浮动标签|
|regex|Boolean||一个正则表达式 会覆盖inputType|
|inputType|String||内置的正则验证 目前只有phone验证|
|err-status|Boolean||是否进行错误提示|
|err-text|Stirng||错误提示文本（当输入的值不符合正则表达式或inputType时的提示文本）|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | 推荐:sc-input | 对sc-ipnut 内的ipnut元素修改样式|
|icon|String||左侧图标：图标的类例如 iconfont icon-phone(这里是图标库的字体图标)|

###### 颜色: 可以设置.sc-input::before 的background-color 来改变动画边框的颜色 或者border 来改变宽度等其他属性（不建议修改）


***

#### 2. sc-textarea

```html
<sc-textarea label="textarea"></sc-textarea>
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |		生效时机 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
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
|float|Boolean|true|是否在输入框聚焦时浮动标签|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | 推荐:sc-textarea | 对sc-textarea 内的textarea元素修改样式|

###### 颜色: 可以设置.sc-textarea::before 的background-color 来改变动画边框的颜色 或者border 来改变宽度等其他属性（不建议修改）