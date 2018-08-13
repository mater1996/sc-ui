/**
 * Created by bai on 2018/5/2
 */
const scRippleBehaviors = require('../sc-ripple-behaviors/sc-ripple-behaviors');
Component({
    behaviors: [scRippleBehaviors],
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        openType: {
            type: String
        },
        size: {
            type: String,
            value: 'default'
        },
        plain: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        hoverClass:{
            type:String,
            value:''
        },
        hoverStopPropagation:{
            type:Boolean,
            value:false
        },
        hoverStartTime:{
            type:Number,
            value:20
        },
        hoverStayTime:{
            type:Number,
            value:70
        },
        formType: {
            type: String
        },
        appParameter: {
            type: String
        },
        sessionFrom: {
            type: String
        },
        sendMessageTitle: {
            type: String
        },
        sendMessagePath: {
            type: String
        },
        sendMessageImg: {
            type: String
        },
        sendMessageCard: {
            type: Boolean,
            value: false
        },
        flat:{
            type: Boolean,
            value: false
        },
        raised:{
            type: Boolean,
            value: false
        },
        fab:{
            type: Boolean,
            value: false
        }
    },
    data: {
        openTypeToBindEvent: {
            'getUserInfo': 'getuserinfo',
            'getphonenumber': 'getphonenumber',
            'launchApp': 'error',
            'contact': 'contact'
        },
        tap:false
    },
    relations: {
        '../scForm/sc-form': {
            type: 'parent', // 关联的目标节点应为父节点
        }
    },
    externalClasses: ['sc-class','sc-ripple-class'],
    methods: {
        _returnEventData(e) {
            if (!this.properties.disabled) {
                this.triggerEvent(`${this.data.openTypeToBindEvent[this.properties.openType]}`, e.detail, {})
            }
        },
        _tap(e){
            this._addRipple_(e);
            this.setData({
                tap:true
            })
        },
        _longPress(e){
            this._longPress_(e);
            this.setData({
                tap:true
            })
        },
        _rippleAnimationEnd(){
            this._rippleAnimationEnd_();
        },
        _touchEnd(){
            this._touchEnd_();
            setTimeout(() => {
                this.setData({
                    tap:false
                })
            },150)
        }
    }
});