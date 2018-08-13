### 模态框

##### 注入组件

```js
const scui = require('path/to/dist/sc-ui');
```

```json
"usingComponents":{
  "sc-dialog":"path/to/dist/components/scDialog/sc-dialog"
}
```

##### 使用

#### 1. sc-dialog
```html
<sc-dialog id="dialog" sc-class="box-shadow-8">
   <view>
    <text>凌晨两点多入睡，五点左右，天色未亮，被猫咪惊醒。它也许刚睡醒，蹿到枕头边贴近我的身体，发出呼噜呼噜的声音，
        流连之后跳下床去，在客厅里玩耍，发出追逐小球和兔皮老鼠的声音。
    </text>
   </view>
</sc-dialog>
```

```js
page({
    onReady() {
        this.data.dialog = scui.Dialog("#dialog");
    },
    openDialog(){
        this.data.dialog.toggle()/open();
    },
    closeDialog(){
        this.data.dialog.toggle()/close();
    }
})
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|overlay|Boolean|true|是否开启遮罩
|overlayClose|Boolean|true|点击遮罩是否关闭模态框|
|open|handler||模态框开启中事件|
|opened|handler||模态框开启事件|
|close|handler||模态框关闭中事件|
|closed|handler||模态框关闭事件|

##### slot
|name|说明|
| ------------ | ------------ |
|default|dialog内容|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-dialog根元素类|