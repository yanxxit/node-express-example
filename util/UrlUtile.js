/**
 * Created by mohoo on 15/4/1.
 */
var url = require('url');
/**
 * 获取完成的链接地址
 * @param url 当前地址
 * @param param 拼接字符串
 */
exports.getNowUrl = function (urlStr, param) {
    var a = url.parse(urlStr);
    if (a.query) {
        return urlStr + "&" + param;
    } else {
        return urlStr + "?" + param;
    }
};