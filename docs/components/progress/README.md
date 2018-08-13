### 进度指示器

##### 注入组件

```json
"usingComponents":{
  "sc-progress":"path/to/dist/components/scProgress/sc-progress",
  "sc-loading":"path/to/dist/components/scLoading/sc-loading"
}
```

### 使用

#### 1. sc-progress

```html
 <sc-progress color="red"></sc-progress>
 <sc-progress color="red" size="16"></sc-progress>
 <sc-progress type="determinate" width="50"></sc-progress>
 <sc-progress type="determinate" size="16" width="80"></sc-progress>
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| type |  String | indeterminate | progress的类型 indeterminate为不确定的状态/determinate为确定状态|
| width |  Number | 0 | progress的类型为determinate时内部的长(按百分比计算)|
| color |  String | rgb(63, 81, 181) | 颜色|
| size |  String | 8 | progress的高度 单位为rpx|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-progress根元素类 |

***

#### 2. sc-loading
radio 必须结合radio-group使用
```html
  <sc-loading></sc-loading>
  <sc-loading color="red"></sc-loading>
  <sc-loading color="red" size="108" width="12"></sc-loading>
```

##### 属性
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| color | String  |#3F51B5	 |  loading的颜色 |
| size | String  | 56|  loading的宽度（rpx） |
| width | String  |6|  loading的宽度（rpx） |

##### 外部类

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|sc-class|String || sc-loading根元素类 |
