# sc-ui

微信小程序material ui

展示

![img](https://cdn.rawgit.com/xbup/sc-ui/104ff7c2/test.gif)

小程序码
<img src="https://cdn.rawgit.com/xbup/sc-ui/5b814316/gh_8cb2d1e6af9d_1280.jpg" height="256px" width="256px" />

## get start

##### 下载：目前不支持npm install 请直接clone或下载

### 1. 引入文件

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
```json
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

#### docs

 - components
   - [button](https://github.com/xbup/sc-ui/tree/master/docs/components/button)
   - [input](https://github.com/xbup/sc-ui/tree/master/docs/components/input)
   - [selectionControls](https://github.com/xbup/sc-ui/tree/master/docs/components/selectionControls)
   - [cell](https://github.com/xbup/sc-ui/tree/master/docs/components/cell)
   - [form](https://github.com/xbup/sc-ui/tree/master/docs/components/form)
   - [dialog](https://github.com/xbup/sc-ui/tree/master/docs/components/dialog)
   - [picker](https://github.com/xbup/sc-ui/tree/master/docs/components/picker)
   - [snackbar](https://github.com/xbup/sc-ui/tree/master/docs/components/snackbar)
   - [tab](https://github.com/xbup/sc-ui/tree/master/docs/components/tab)
 - style
   - [font](https://github.com/xbup/sc-ui/tree/master/docs/style/font)
   - [icon](https://github.com/xbup/sc-ui/tree/master/docs/style/icon)
   - [layout](https://github.com/xbup/sc-ui/tree/master/docs/style/layout)


