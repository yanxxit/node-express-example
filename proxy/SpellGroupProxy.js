var httpUtil = require('../util/HttpUtil');
var apis = require('../apis');

var SpellGroupProxy = {};

/**
 * 发起团
 * @param openid
 * @param callback
 */
SpellGroupProxy.createGroup = function (openid, callback) {
    httpUtil.post(apis.SpellGroup.createGroup, {openid: openid}, function (error, response, content) {
        console.log(content);
        callback(error, content);
    });
};

/**
 * 参团
 * @param openid
 * @param spell_group_itemid 团号
 * @param callback
 */
SpellGroupProxy.joinGroup = function (openid, spell_group_itemid, callback) {
    httpUtil.post(apis.SpellGroup.joinGroup, {
        openid: openid,
        spell_group_itemid: spell_group_itemid
    }, function (error, response, content) {
        callback(error, content);
    });
};

/**
 * 获取团列表
 * @param callback
 */
SpellGroupProxy.groupList = function (callback) {
    httpUtil.get(apis.SpellGroup.groupList, function (error, response, content) {
        console.log(content);
        callback(error, content);
    });
};

// console.log("开始")
// SpellGroupProxy.createGroup("oKXUCj1MOddnp-sCpGi1J1dg3TyM",function (err,data) {
//     console.log(data)
// });
//
// SpellGroupProxy.groupList(function (err,data) {
//     console.log(data)
// });

module.exports = SpellGroupProxy;