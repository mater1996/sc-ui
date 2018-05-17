/**
 * Created by bai on 2018/5/2
 */
let checkboxGroupCount = 1;

Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
    },
    data:{
        value:[]
    },
    relations: {
        '../scCell/sc-cell': {
            type: 'child', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['sc-class'],
    ready(){
        this.items = this._getAllCheckboxs();
    },
    methods: {
        _getAllCheckboxs: function(){
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            return this.getRelationNodes('../scCell/sc-cell');
        }
    },
});