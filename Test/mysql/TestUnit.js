var mysql = require('mysql');
var moment = require('moment');

//var config = {
//    host: '172.16.50.136',
//    port: 3306,
//    database: 'test',
//    user: 'root',
//    password: 'mohoo2011'
//};

var config = {
    host: '127.0.0.1',
    port: 3306,
    database: 'test',
    user: 'root',
    password: 'root'
};

//创建连接
var client = '';
var VisitRecordModels = {};

var handleError = function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            //connect();
            console.log('链接断开')
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


VisitRecordModels.QueryVisitRecordById = function (id, callback) {
    var strsql = "select * from sh_localflow where id=" + id;
    console.log(strsql)
    client.query(strsql, function (err, result) {
        if (err) return callback('数据查询失败！');
        callback(null, result);
    });
};

//创建记录
VisitRecordModels.CreateVisitRecord = function (openid, deviceno, remark, callback) {

};


module.exports = VisitRecordModels;