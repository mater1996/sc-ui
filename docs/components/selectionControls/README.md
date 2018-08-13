### 选择控制器

##### 注入组件

```json
"usingComponents":{
  "sc-switch":"path/to/dist/components/scSwitch/sc-switch",
  "sc-radio-group":"path/to/dist/components/scRadioGroup/sc-radio-group",
  "sc-radio":"path/to/dist/components/scRadio/sc-radio",
  "sc-checkboxGroup":"path/to/dist/components/scCheckboxGroup/sc-checkbox-group"
  "sc-checkbox":"path/to/dist/components/scCheckbox/sc-checkbox"
}
```

### 使用

#### 1. sc-switch

```html
<sc-switch name="switch" checked bind:change="switchChange"></sc-switch>
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |  handler |	 | switch change事件|
|checked|Boolean|false|是否选中|
|disabled|Boolean|false|是否禁用|
|value|handler||chenge事件携带的value|
|color|String|#ff4081|switch的颜色|
|name|String||作为form内部元素时提交传出的key|
|ripple|Boolean|true|点击涟漪效果|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-switch根元素类 |

***

#### 2. radio
radio 必须结合radio-group使用
```html
 <sc-radio-group bind:change="radioChange">
   <sc-radio label="radio1" checked value="radio1"></sc-radio>
   <sc-radio label="radio2" reverse value="radio2" color="red"></sc-radio>
   <sc-radio label="disabled" checked disabled></sc-radio>
 </sc-radio-group>
```

##### 2.1. sc-radio-group

##### 属性
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |  handler |	 | sc-radio-group 触发的change事件|

##### 外部类

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String ||sc-radio-group根元素类 |

##### 2.2. sc-radio
##### 属性
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| color | String |	 | radio的颜色|
| checked | String |	 | 是否选中|
| disabled | String |	 | 是否禁用|
| label | String |	 | radio的左侧或右侧label|
| value | String |	 | radio的value|
| reverse | Boolean |false| label反转到右侧|
|ripple|Boolean|true|点击涟漪效果|

##### 外部类

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-radio根元素类 |

***

#### 3. sc-checkbox
radio 必须结合radio-group使用
```html
 <sc-radio-group bind:change="radioChange">
   <sc-radio label="radio1" checked value="radio1"></sc-radio>
   <sc-radio label="radio2" reverse value="radio2" color="red"></sc-radio>
   <sc-radio label="disabled" checked disabled></sc-radio>
 </sc-radio-group>
```

##### 3.1. sc-checkbox-group

##### 属性
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| bind:change |  handler |	 | sc-checkbox-group 内change事件|

##### 外部类

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-checkbox-group根元素类 |

##### 3.2. sc-checkbox

##### 属性
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| color | String |	 | checkbox的颜色|
| checked | String |	 | 是否选中|
| disabled | String |	 | 是否禁用|
| label | String |	 | checkbox的左侧或右侧label|
| value | String |	 | checkbox的value|
| reverse | Boolean |false| label反转到右侧|
|ripple|Boolean|true|点击涟漪效果|

##### 外部类

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-checkbox根元素类 |