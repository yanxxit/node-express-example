var logger = require("../util/log4jsUtil");
var config = require("../config");
/**
 *
 * @param data
 * @param status
 * @constructor
 */
var ResKit = {};

/**
 * 通用返回参数
 * @param status 200 成功数据，0 表示处理失败  500 表示服务异常
 * @param data
 * @param info 返回接口描述，默认隐藏 测试时 显示
 * @returns {{status: *, data: *, info: *}}
 */
ResKit.params = function (status, data, info) {
    var param = {status: status, data: data, info: config.debug ? info : ''};
    logger.info('返回参数：' + param);
    return param;
};


module.exports = ResKit;