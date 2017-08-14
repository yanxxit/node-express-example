var mysql = require('mysql');
var EventProxy = require('eventproxy');

//创建连接
var client = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'telecom-wx',
    user: 'root',
    password: 'root',
});

client.connect(function (err, result) {
    if (err) return console.log('连接失败')
    console.log('连接成功')
});


var Shaw = {};

//查询
Shaw.QueryInfoById = function (id, callback) {
    var sql = 'select * from student where id=' + id;
    client.query(sql, function (err, result) {
        if (err) return callback('数据库链接失败！');
        client.end(function (terr, tresult) {
            if (terr) return console.log('断开链接失败')
            console.log('断开链接成功')
        });
        callback(null, result);
    });
};





