/**
 * Created by EDZ on 2018/7/17
 */

//十六进制颜色值域RGB格式颜色值之间的相互转换

//-------------------------------------
//十六进制颜色值的正则表达式
const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
/*RGB颜色转换为16进制*/
const colorHex = function (str) {
    let that = str;
    if(/^(rgb|RGB)/.test(that)){
        let aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
        let strHex = "#";
        for(let i=0; i<aColor.length; i++){
            let hex = Number(aColor[i]).toString(16);
            if(hex === "0"){
                hex += hex;
            }
            strHex += hex;
        }
        if(strHex.length !== 7){
            strHex = that;
        }
        return strHex;
    }else if(reg.test(that)){
        const aNum = that.replace(/#/,"").split("");
        if(aNum.length === 6){
            return that;
        }else if(aNum.length === 3){
            let numHex = "#";
            for(let i=0; i<aNum.length; i+=1){
                numHex += (aNum[i]+aNum[i]);
            }
            return numHex;
        }
    }else{
        return that;
    }
};

//-------------------------------------------------

/*16进制颜色转为RGB格式*/
const colorRgb = function (str,opacity) {
    let sColor = str.toLowerCase();
    if(sColor && reg.test(sColor.trim())){
        if(sColor.length === 4){
            let sColorNew = "#";
            for(let i=1; i<4; i+=1){
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        const sColorChange = [];
        for(let i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
        }
        if(opacity){
            sColorChange.push(opacity)
        }
        return "rgba(" + sColorChange.join(",") + ")";
    }else{
        return sColor;
    }
};

module.exports = {
    colorHex,
    colorRgb
};