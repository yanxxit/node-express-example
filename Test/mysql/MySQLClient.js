var mysql = require('mysql');
var moment = require('moment');

var config = {
    host: '172.16.50.136',
    port: 3306,
    database: 'test',
    user: 'root',
    password: 'mohoo2011'
};

//创建连接
var client;
var handleError = function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    } else {
        console.log('连接成功')
    }
};
var connect = function () {
    client = mysql.createConnection(config);
    client.connect(handleError);
    client.on('error', handleError);
};
connect();

var MySQLClient = {};
MySQLClient.ExecSql = function (sql, callback) {
    console.log(sql)
    client.query(sql, function (err, result) {
        if (err) return callback('数据操作失败！');
        callback(null, result);
    });
};

module.exports = MySQLClient;