var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});
//设置值 redis.print 返回值
client.set("admin", "yanxxit", redis.print);

//获取值
client.get("admin", function (err, data) {
    console.log(err);
    console.log(data)
});

//写入JavaScript(JSON)对象
client.hmset('sessionid', { username: 'kris', password: 'password' }, function(err) {
    console.log(err)
})

//读取JavaScript(JSON)对象
client.hgetall('sessionid', function(err, object) {
    console.log(object)
})
