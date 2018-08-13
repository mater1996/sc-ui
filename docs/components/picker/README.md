### 日期/时间选择器

##### 注入组件

```js
const scui = require('path/to/dist/sc-ui');
```

```json
"usingComponents":{
      "sc-date-picker":"path/to/dist/components/scDatePicker/sc-date-picker",
      "sc-time-picker":"path/to/dist/components/scTimePicker/sc-time-picker"
}
```

##### 使用

#### 1. sc-date-picker 日期选择器
```html
<sc-button sc-class="sc-btn" bind:tap="openDatePicker">打开/关闭</sc-button>
<sc-date-picker id="datepicker"></sc-date-picker>
```

```js
page({
    onReady() {
       this.data.datePicker = scui.DatePicker("#datepicker");
    },
     openDatePicker(){
        this.data.datePicker.open({
           date:'2018-08-16'  //初始化日期
        });
     },
     closeDatePicker(){
        this.data.datePicker.close();
     }
})
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|submit|handler||点击确定按钮触发事件|
|open|handler||选择器打开中事件|
|opened|handler||选择器打开事件|
|close|handler||选择器关闭中事件|
|closed|handler||选择器关闭事件|

##### slot
|name|说明|
| ------------ | ------------ |

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-date-picker根元素类|

#### 1. sc-time-picker 日期选择器
```html
<sc-button sc-class="sc-btn" bind:tap="openTimePicker">打开/关闭</sc-button>
<sc-time-picker id="timepicker"></sc-date-picker>
```

```js
page({
    onReady() {
       this.data.timePicker = scui.DatePicker("#timePicker");
    },
    openTimePicker(){
       this.data.timePicker.open({
          date:'2018-08-16 10:25'  //初始化时间
       });
    },
    closeTimePicker(){
       this.data.timePicker.close();
    }
})
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|submit|handler||点击确定按钮触发事件|
|open|handler||选择器打开中事件|
|opened|handler||选择器打开事件|
|close|handler||选择器关闭中事件|
|closed|handler||选择器关闭事件|

##### slot
|name|说明|
| ------------ | ------------ |

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-time-picker根元素类|