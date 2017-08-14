var redis = require("redis");
var client = redis.createClient();
var moment = require('moment')

client.on("error", function (err) {
    console.log("Error " + err);
});

var RankProxy = {};

RankProxy.login = function (callback) {
    //设置值 redis.print 返回值
    client.set(moment().format('x'), 'admin' + moment().format('x'), redis.print);
};

RankProxy.Add = function (obj, callback) {
    //写入JavaScript(JSON)对象
    client.hmset('sessionid', {username: 'kri1', password: 'password'}, function (err) {
        callback(err, null);
    })
};

RankProxy.Query = function (name, callback) {
    //读取JavaScript(JSON)对象
    client.hgetall(name, function (err, object) {
        console.log(object)
        callback(err, object);
    })
};

module.exports = RankProxy;

