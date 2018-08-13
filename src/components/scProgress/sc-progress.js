/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        type:{
            type:String,
            value:'indeterminate'
        },
        width:{
            type:Number,
            value:0
        },
        color:{
            type:String,
            value:'rgb(63, 81, 181);'
        },
        size:{
            type:String,
            value:'8'
        }
    },
    externalClasses: ['sc-class','sc-determinate-class'],
    data: {

    },
    methods: {

    }
});