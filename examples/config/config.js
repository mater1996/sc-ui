/**
 * Created by bai on 2018/5/1
 */
const {isEmpty} = require('../utils/helper');

// 此处是配置文件  请勿随意修改
// 请向这里添加配置 然后 app.config(name) 获取配置 //不加name默认获取所有配置

const config = {
    version: '1.1'
};

module.exports = function (name) {
    if (!isEmpty(name)){
        let configValue = config[name];
        if(!isEmpty(configValue)){
            return configValue;
        }else {
            throw new Error('config not find');
        }
    }
    return config;
};