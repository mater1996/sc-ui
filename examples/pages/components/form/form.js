Page({
    data: {
        value:null,
        htmlUsage:' <sc-form bind:submit="submit" report-submit submit-text="提交" submit-btn-class="sc-btn submit-btn">\n' +
        '</sc-form>'
    },
    onLoad: function () {

    },
    onReady() {

    },
    submit(e){
        this.setData({
            value:JSON.stringify(e.detail.value)
        });
        console.log('提交',e.detail.value);
    }
});
