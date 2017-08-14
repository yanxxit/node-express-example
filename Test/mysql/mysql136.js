var mysql = require('mysql');

var TEST_DATABASE = 'telecom-wx';

//创建连接
var client = mysql.createConnection({
    host: '172.16.50.136',
    port: 3306,
    database: 'telecom-wx',
    user: 'mohoo',
    password: 'mohoo2011',
});

client.connect(function (err, result) {
    if (err) return console.log('连接失败')
    console.log('连接成功')
});


var Shaw = {};

Shaw.QueryInfoByBpnum = function (bpnum, callback) {
    var strsql = "select * from dx_bill_pay where status=100 and bpnum='" + bpnum + "'";
    client.query(strsql, function (err, result) {
        if (err) return callback('数据查询失败！');
        client.end(function (terr, tresult) {
            if (terr) return console.log('断开链接失败')
            console.log('断开链接成功')
        });
        callback(null, result);
    });
};


Shaw.QueryInfoByBpnum('73740069181', function (err, result) {
    if (err) return console.log(err);
    console.log(JSON.stringify(result))
});

// var request = require('request');
// var headers = {
//     'User-Agent': 'request-wap-oauth',
//     'X_HPZ_APPLICATION_ID': 'wechat',
//     'Content-Type': 'application/json'
// };
// var options = {
//     url: 'http://172.16.50.139/csb/2.0/QueryCustInfoByCustNum?custNumber=202143818470',
//     method: 'GET',
//     headers: headers,
//     json: true,
//     timeout: 3000
// };
// request(options, function (error, response, content) {
//     if (!error && response.statusCode == 200) {
//         console.log('用户信息：' + JSON.stringify(content))
//     } else {
//         logger.error("request-get-url-error: " + error + " url:" + options.url);
//     }
// });


