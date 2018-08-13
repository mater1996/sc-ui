//index.js
//获取应用实例
const app = getApp();
const scui = require('../../../assets/lib/scui/dist/sc-ui');

Page({
    data: {
        jsUsage:'this.data.datePicker = scui.DatePicker("#datepicker");\n' +
        'this.data.datePicker.open();',
        htmlUsage:'<sc-button sc-class="sc-btn" bind:tap="openDatePicker">打开/关闭</sc-button>\n' +
        '  <sc-date-picker id="datepicker"\n' +
        '     bind:open="pickerOpen"\n' +
        '     bind:close="pickerClose"\n' +
        '     bind:opened="pickerOpened"\n' +
        '     bind:closed="pickerClosed"\n' +
        '     bind:submit="datePickerSubmit"\n' +
        '></sc-date-picker>',
        value:null
    },
    onLoad: function () {

    },
    onReady() {
        this.data.datePicker = scui.DatePicker("#datepicker");
        this.data.timePicker = scui.TimePicker("#timepicker");
    },
    openDatePicker(){
        this.data.datePicker.open();
    },
    openTimePicker(){
        this.data.timePicker.open();
    },
    datePickerSubmit(e){
        this.setData({
            value:e.detail.value
        })
    },
    pickerOpen(){
        console.log("选择器打开中");
    },
    pickerClose(){
        console.log("选择器关闭中");
    },
    pickerOpened(){
        console.log("选择器打开");
    },
    pickerClosed(){
        console.log("选择器关闭");
    }
});
