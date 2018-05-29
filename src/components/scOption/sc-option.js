/**
 * Created by bai on 2018/5/2
 */

Component({
    properties: {
        value:{
            type:null
        }
    },
    data: {
        checked:false,
        clicked:false,
        showRipple:false,
        disabled:false,
        value:null
    },
    ready(){
        this.setData({
            checked:this.properties.checked,
            disabled:this.properties.disabled,
            value:this.properties.value
        })
    },
    relations: {
        '../scSelect/sc-select':{
            type: 'parent',
        }
    },
    externalClasses: ['sc-class'],
    methods: {}
});