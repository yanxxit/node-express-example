var httpUtil = require('../util/HttpUtil');
var logger = require('../util/log4jsUtil');
var apis = require('../apis');

var AuthProxy = {};

/**
 * 获取基本授权URL
 * @param state
 * @param callback
 */
AuthProxy.getBaseAuthURL = function (state, callback) {
    httpUtil.post(apis.WXBaseAuthURL, {state: state}, function (error, response, content) {
        logger.info("获取微信基本授权回调地址：" + JSON.stringify(content));
        callback(error, content);
    });
};


/**
 * 获取高级授权URL
 * @param state
 * @param callback
 */
AuthProxy.getSeniorAuthURL = function (state, callback) {
    httpUtil.post(apis.WXSeniorAuthURL, {state: state}, function (error, response, content) {
        logger.info("获取微信高级授权回调地址：" + JSON.stringify(content));
        if (!error) {
            callback(null, content.redirect);
        } else {
            callback("获取微信高级授权回调地址/服务器繁忙请稍候重试");
        }
    });
};

/**
 * 获取基本信息
 * @param openid
 * @param callback
 */
AuthProxy.getUserInfo = function (openid, callback) {
    httpUtil.get(apis.wxUserFind + "?openid=" + openid, function (error, response, content) {
        logger.info("获取微信用户详细信息：" + JSON.stringify(content));
        if (!error) {
            callback(null, content);
        } else {
            callback("获取微信用户详细信息/服务器繁忙请稍候重试");
        }
    });
};

module.exports = AuthProxy;