/**
 * Created by bai on 2018/5/2
 */
const scRippleBehaviors = require('../sc-ripple-behaviors/sc-ripple-behaviors');
Component({
    options: {
        multipleSlots: true
    },
    behaviors: [scRippleBehaviors],
    properties: {
        subHeader:{
            type:String
        }
    },
    relations: {
        '../scCellGroup/sc-cell-group': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class','left-icon','right-icon'],
    methods: {
        _tap(e){
            this._addRipple_(e);
        },
        _longPress(e){
            this._longPress_(e);
        },
        _rippleAnimationEnd(){
            this._rippleAnimationEnd_();
        },
        _touchEnd(){
            this._touchEnd_();
        }
    }
});