var WechatUserInfoRest = {};
var logger = require('../util/log4jsUtil');
var _ = require("underscore")._;
var EventProxy = require('eventproxy');
var moment = require('moment');
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