var WechatUserInfoRest = {};
var WechatUserInfoProxy = require('../proxy/WechatUserInfoProxy');

/**
 * 添加奖品记录
 * @param openid
 * @param callback
 * @constructor
 */
WechatUserInfoRest.QueryUserInfo = function (openid, callback) {
    WechatUserInfoProxy.getWxBindList(openid, function (err, result) {
        callback(err, result);
    })
};
module.exports = WechatUserInfoRest;