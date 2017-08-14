/**
 * 微信用户信息获取
 * 1.获取用户的昵称，头像
 * 2.获取用户绑定的设备列表
 * @type {exports|module.exports}
 */
var httpUtil = require('../util/HttpUtil');
var logger = require('../util/log4jsUtil');
var apis = require('../apis');
var WechatUserInfoProxy = {};

/**
 * 获取基本授权URL 获取设备列表
 * @param openid
 * @param callback
 */
WechatUserInfoProxy.getUserInfoByOpenid = function (openid, callback) {
    httpUtil.get(apis.wxUserFind + "?openid=" + openid, function (error, response, content) {
        callback(error, content);
    });
};

/**
 * 刷新显示用户信息
 * @param openid
 * @param callback
 */
WechatUserInfoProxy.getUserInfoByOpenidRefresh = function (openid, callback) {
    httpUtil.get(apis.wxUserFind + "?openid=" + openid + "&refresh=1", function (error, response, content) {
        callback(error, content);
    });
};


/**
 * 获取微信用户信息
 * @param openid
 * @param callback
 */
WechatUserInfoProxy.getWxBindList = function (openid, callback) {
    httpUtil.get(apis.wxDeviceList + "?openid=" + openid, function (error, response, content) {
        callback(error, content);
    });
};

module.exports = WechatUserInfoProxy;