### snackbar

##### 注入组件

```js
const scui = require('path/to/dist/sc-ui');
```

```json
"usingComponents":{
  "sc-snackbar":"path/to/dist/components/scSnackbar/sc-snackbar"
}
```

##### 使用

#### 1. sc-snackbar

```html
<sc-snackbar id="snackbar">这是一个snackbar</sc-snackbar>
```

```js
page({
    onReady() {
            this.data.snackBar = scui.SnackBar("#snackbar");
        },
    openSnackBar(){
        this.data.snackBar.open({
            message:'snackBar打开了'+this.data.snackBarLength++,   //内容
            buttonText:'点我',           //右侧button的内容，不提供不显示button
            // buttonTextColor:'red',    // button内容的颜色
            // color:'lightblue',        // snackbar的背景颜色
            // messageColor:'black',     // 内容的颜色
            closeOnButtonClick:true,     // 是否点击button关闭snackbar
            onButtonClick:() => {
                console.log('点击button');
            },
            onOpen:() => {
                console.log('snackBar打开中');
            },
            onOpened(){
               console.log('snackBar已打开');
            },
            onClose(){
                console.log('snackBar关闭中');
            },
            onClosed(){
                console.log('snackBar已关闭');
            }
        });
    }
})
```

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-snackbar根元素类|