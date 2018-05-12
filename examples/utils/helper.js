// 常用方法 请随意调用

const {
  isArray,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
} = require('core-util');


const numberReg = /^((-?\d*\.?\d*(?:e[+-]?\d*(?:\d?\.?|\.?\d?)\d*)?)|(0[0-7]+)|(0x[0-9a-f]+))$/i;
const toString = Object.prototype.toString;

exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isUndefined = isUndefined;
exports.isRegExp = isRegExp;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isPrimitive = isPrimitive;

/**
 * override isObject method in `core-util` module
 */
exports.isObject = obj => {
  return toString.call(obj) === '[object Object]';
};

/**
 * 检查值是否为整数
 */
function isInt(value) {
  if (isNaN(value) || exports.isString(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

exports.isInt = isInt;

/**
 * 使一个function变为promise
 * @param  {Function} fn       []
 * @param  {Object}   receiver []
 * @return {Promise}            []
 */
function promisify(fn, receiver) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res);
      }]);
    });
  };
}

exports.promisify = promisify;

function wxpromisify(fn,recevier) {
    return (options) =>{
        return new Promise((resolve,reject) => {
            fn.call(recevier,Object.assign(options,{
                success: res => {
                    resolve(res);
                },
                fail:res =>{
                    reject(res);
                }
            }));
        })
    }
}

exports.wxpromisify = wxpromisify;
/**
 * 扩展对象
 * @return {Object} []
 */
function extend(target = {}, ...args) {
  let i = 0;
  const length = args.length;
  let options;
  let name;
  let src;
  let copy;
  if (!target) {
    target = exports.isArray(args[0]) ? [] : {};
  }
  for (; i < length; i++) {
    options = args[i];
    if (!options) {
      continue;
    }
    for (name in options) {
      src = target[name];
      copy = options[name];
      if (src && src === copy) {
        continue;
      }
      if (exports.isArray(copy)) {
        target[name] = extend([], copy);
      } else if (exports.isObject(copy)) {
        target[name] = extend(src && exports.isObject(src) ? src : {}, copy);
      } else {
        target[name] = copy;
      }
    }
  }
  return target;
}

exports.extend = extend;

/**
 * 把字符串转成驼峰表示法
 * @param  {String} str []
 * @return {String}     []
 */
function camelCase(str) {
  if (str.indexOf('_') > -1) {
    str = str.replace(/_(\w)/g, (a, b) => {
      return b.toUpperCase();
    });
  }
  return str;
}
exports.camelCase = camelCase;

/**
 * 把驼峰写法转化为蛇形写法
 * @param  {String} str []
 * @return {String}     []
 */
function snakeCase(str) {
  return str.replace(/([^A-Z])([A-Z])/g, function($0, $1, $2) {
    return $1 + '_' + $2.toLowerCase();
  });
};
exports.snakeCase = snakeCase;

/**
 * 判断输入是不是一个字符串类型的数字
 * @param  {Mixed}  obj []
 * @return {Boolean}     []
 */
function isNumberString(obj) {
  if (!obj) return false;
  return numberReg.test(obj);
}
exports.isNumberString = isNumberString;

/**
 * 判断obj是否是真正的空
 * @param  {Mixed} obj []
 * @return {Boolean}     []
 */
function isTrueEmpty(obj) {
  if (obj === undefined || obj === null || obj === '') return true;
  if (exports.isNumber(obj) && isNaN(obj)) return true;
  return false;
}
exports.isTrueEmpty = isTrueEmpty;

/**
 * 判断对象是否为空
 * @param  {[Mixed]}  obj []
 * @return {Boolean}     []
 */
function isEmpty(obj) {
  if (isTrueEmpty(obj)) return true;
  if (exports.isRegExp(obj)) {
    return false;
  } else if (exports.isDate(obj)) {
    return false;
  } else if (exports.isError(obj)) {
    return false;
  } else if (exports.isArray(obj)) {
    return obj.length === 0;
  } else if (exports.isString(obj)) {
    return obj.length === 0;
  } else if (exports.isNumber(obj)) {
    return obj === 0;
  } else if (exports.isBoolean(obj)) {
    return !obj;
  } else if (exports.isObject(obj)) {
    for (const key in obj) {
      return false && key; // only for eslint
    }
    return true;
  }
  return false;
}
exports.isEmpty = isEmpty;

/**
 * 生成一个 Deferred 对象
 * @return {Object} []
 */
function defer() {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
exports.defer = defer;

/**
 * 将 setTimeout 包装为 Promise
 * @param  {Number} time []
 * @return {[type]}      []
 */
function timeout(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
exports.timeout = timeout;

/**
 * 对字符串进行 HTML 转义，转义 <、>、"、' 字符。
 */
function escapeHtml(str) {
  return (str + '').replace(/[<>'"]/g, a => {
    switch (a) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quote;';
      case '\'':
        return '&#39;';
    }
  });
}
exports.escapeHtml = escapeHtml;

/**
 * 返回一个格式化日期
 * @param  {Date} date []
 * @return {String}      []
 */
function datetime(date = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
  const fn = d => {
    return ('0' + d).slice(-2);
  };

  const d = new Date(date);
  const formats = {
    YYYY: d.getFullYear(),
    MM: fn(d.getMonth() + 1),
    DD: fn(d.getDate()),
    HH: fn(d.getHours()),
    mm: fn(d.getMinutes()),
    ss: fn(d.getSeconds())
  };

  return format.replace(/([a-z])\1+/ig, a => {
    return formats[a] || a;
  });
}
exports.datetime = datetime;

/**
 * 忽略对象中的某些属性，返回新的对象
 */
exports.omit = function(obj, props) {
  if (exports.isString(props)) {
    props = props.split(',');
  }
  const keys = Object.keys(obj);
  const result = {};
  keys.forEach(item => {
    if (props.indexOf(item) === -1) {
      result[item] = obj[item];
    }
  });
  return result;
};

/**
 *
 * @param date
 * @returns {string}
 */

exports.formatTime = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

/**
 *
 * @param n
 * @returns {*}
 */

exports.formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n
};

