/**
 * Created by bai on 2018/5/4
 */

// 使用说明 将wx的api修改为promise 占用了所有的success和fail的回调函数请勿在options里使用
const {wxpromisify} = require('./helper');
// 选择图片
exports.chooseImage = wxpromisify(wx.chooseImage);

// 上传图片
const uploadFile = exports.uploadFile = wxpromisify(wx.uploadFile);

// 上传多张图片
exports.uploadManyFile = function(options,tempFilePaths){
    let promises = [];
    for(let tempFilePath of tempFilePaths){
        promises.push(uploadFile(Object.assign(options,{
            filePath: tempFilePath,
        })))
    }
    return Promise.all(promises);
};

// 下载图片
exports.downloadFile = wxpromisify(wx.downloadFile);
