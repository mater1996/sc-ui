### 单元格

##### 注入组件

```json
"usingComponents":{
  "sc-cell":"path/to/dist/components/scCell/sc-cell",
  "sc-cell-group":"path/to/dist/components/scCellGroup/sc-cell-group"
}
```

##### 使用

#### 1. sc-cell
```html
<sc-cell-group>
    <sc-cell ripple="{{false}}">header</sc-cell>
    <sc-cell left-icon="iconfont icon-phone">header</sc-cell>
    <sc-cell right-icon="iconfont icon-right">header</sc-cell>
    <sc-cell switch ripple="{{false}}" value="cellSwitch" checked bind:cellSwitchChange="cellChange">header</sc-cell>
</sc-cell-group>
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |		生效时机 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|ripple|Boolean|true|是否点击涟漪效果|

##### slot
|name|说明|
| ------------ | ------------ |
|default|文本|
|subheader||
|righttext|右侧文本|
|action|动作|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-cell根元素类|
| left-icon| String | | 左侧icon|
| right-icon| String | |右侧icon|