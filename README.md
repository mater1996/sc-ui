# sc-ui

微信小程序 material design UI

##### 展示

![img](https://cdn.jsdelivr.net/gh/xbup/sc-ui@104ff7c253e0015f7cdba59b0bb0e168f9c687d7/test.gif)

##### 体验
使用微信扫一扫体验小程序组件示例

<img src="https://cdn.jsdelivr.net/gh/xbup/sc-ui@5b8143163dbadaa239b4d01e816f4f9ad38e9e08/gh_8cb2d1e6af9d_1280.jpg" height="256px" width="256px" />

## get start

##### 下载：目前不支持npm install 请直接clone或下载

## 1. 引入文件

将dist文件引入到项目目录任意位置

#### js
``` js
const scui = require('path/to/dist/sc-ui');
```
#### wxss
``` css
@import "path/to/dist/sc-ui.wxss";
@import "path/to/dist/assets/font-icon/material.wxss";
```

#### component
```js
"usingComponents":{
    "sc-button":"path/to/dist/components/scButton/sc-button",
    "sc-input":"path/to/dist/components/scInput/sc-input",
    "sc-progress":"path/to/dist/components/scProgress/sc-progress",
    "sc-textarea":"path/to/dist/components/scTextarea/sc-textarea",
    "sc-checkbox":"path/to/dist/components/scCheckbox/sc-checkbox",
    "sc-checkbox-group":"path/to/dist/components/scCheckboxGroup/sc-checkbox-group",
    "sc-form":"path/to/dist/components/scForm/sc-form",
    "sc-switch":"path/to/dist/components/scSwitch/sc-switch",
    "sc-radio":"path/to/dist/components/scRadio/sc-radio",
    "sc-radio-group":"path/to/dist/components/scRadioGroup/sc-radio-group",
    "sc-cell":"path/to/dist/components/scCell/sc-cell",
    "sc-cell-group":"path/to/dist/components/scCellGroup/sc-cell-group",
    "sc-loading":"path/to/dist/components/scLoading/sc-loading",
    "sc-tab-group":"path/to/dist/components/scTabGroup/sc-tab-group",
    "sc-tab":"path/to/dist/components/scTab/sc-tab",
    "sc-dialog":"path/to/dist/components/scDialog/sc-dialog",
    "sc-snackbar":"path/to/dist/components/scSnackbar/sc-snackbar",
    "sc-date-picker":"path/to/dist/components/scDatePicker/sc-date-picker",
    "sc-time-picker":"path/to/dist/components/scTimePicker/sc-time-picker"
}
```

#### icon
http://www.iconfont.cn/collections/detail?cid=444

## 2. docs(文档)

 - components
   - [button(按钮)](https://github.com/xbup/sc-ui/tree/master/docs/components/button)
   - [input(输入框)](https://github.com/xbup/sc-ui/tree/master/docs/components/input)
   - [selectionControls(选择控制器)](https://github.com/xbup/sc-ui/tree/master/docs/components/selectionControls)
   - [cell(单元格)](https://github.com/xbup/sc-ui/tree/master/docs/components/cell)
   - [form(表单)](https://github.com/xbup/sc-ui/tree/master/docs/components/form)
   - [dialog(模态框)](https://github.com/xbup/sc-ui/tree/master/docs/components/dialog)
   - [picker(日期/时间选择器)](https://github.com/xbup/sc-ui/tree/master/docs/components/picker)
   - [snackbar(消息提示)](https://github.com/xbup/sc-ui/tree/master/docs/components/snackbar)
   - [tab(标签)](https://github.com/xbup/sc-ui/tree/master/docs/components/tab)
 - style
   - [font(字体)](https://github.com/xbup/sc-ui/tree/master/docs/style/font)
   - [icon(图标)](https://github.com/xbup/sc-ui/tree/master/docs/style/icon)
   - [layout(布局)](https://github.com/xbup/sc-ui/tree/master/docs/style/layout)


## 3.案例

<img src="https://cdn.jsdelivr.net/gh/xbup/sc-ui@master/gh_acaa36129c87_430.jpg" height="200px" width="200px" />

## 4.License
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2018-present, xbup