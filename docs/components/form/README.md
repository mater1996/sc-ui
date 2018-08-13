### form表单

##### 注入组件

```json
"usingComponents":{
  "sc-form":"path/to/dist/components/scForm/sc-form"
}
```

sc-form主要是为了生成formId来使用 在样式上会有所局限
在提交时会将所有的 选择控制器，文本框的内容进行以name为key，并返回该内容

##### 使用

#### 1. sc-form
```html
<sc-form bind:submit="submit" report-submit submit-text="提交" sc-button-class="sc-btn submit-btn">
       <sc-input sc-class="sc-input" label="姓名" name="name" bindinput="input" selection-start="{{-1}}"
           cursor="0"></sc-input>
       <sc-radio-group sc-class="sc-radio-group" name="sex">
       <sc-radio label="男" sc-class="sc-radio" checked="{{true}}"
          value="man"></sc-radio>
       <sc-radio label="女" sc-class="sc-radio" value="women"></sc-radio>
    </sc-radio-group>
    <sc-checkbox-group name="like" sc-class="sc-checkbox-group-row" bindchange="checkboxChange">
     <sc-checkbox sc-class="sc-checkbox" label="音乐" checked="{{true}}" value="music"></sc-checkbox>
     <sc-checkbox sc-class="sc-checkbox" label="电影" checked="{{false}}" value="movie"></sc-checkbox>
     <sc-checkbox sc-class="sc-checkbox" label="书籍" checked="{{false}}" value="book"></sc-checkbox>
   </sc-checkbox-group>
</sc-form>
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|report-submit|Boolean|是否返回 formId 用于发送模板消息|
|submit|handler|携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String |  | sc-form 根元素样式|
|sc-button-class|String||内部提交按钮的样式|