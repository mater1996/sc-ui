/**
 * Created by bai on 2018/5/1
 */

const {wxpromisify} = require('./helper');

/**
 * wxRequestOptions
 * @param options
 * @returns {Promise}
 */
const wxRequestPromise = wxpromisify(wx.request);

const request = {
    handler(url,header){
        // 对header操作即可
    },
    get: function (url, header) {
        request.handler(url, header);
        let options = {
            url, header, method: 'GET'
        };
        return wxRequestPromise(options).catch(err => {
            // 捕获错误
        });
    },
    post: function (url, data, header) {
        request.handler(url,header);
        let options = {
            url, data, header, method: 'POST'
        };
        return wxRequestPromise(options).catch(err => {
            // 捕获错误
        });
    },
    put: function (url, data, header) {
        request.handler(url,header);
        let options = {
            url, data, header, method: 'PUT'
        };
        return wxRequestPromise(options).catch(err => {
            // 捕获错误
        });
    },
    delete: function (url, data, header) {
        request.handler(url,header);
        let options = {
            url, data, header, method: 'DELETE'
        };
        return wxRequestPromise(options).catch(err => {
            // 捕获错误
        });
    },
};

module.exports = request;