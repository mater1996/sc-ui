/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {},
    data: {
        tabHeight: 'auto'
    },
    relations: {
        '../scTabGroup/sc-tab-group': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    methods: {}
});