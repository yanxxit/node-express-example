var mysql = require('mysql');
var EventProxy = require('eventproxy');

var TEST_DATABASE = 'telecom-wx';

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

Shaw.UpdateById = function (id, name, callback) {
    var UpdateSql = "update student set name='" + name + "' where id=" + id;
    var QuerySql = 'select * from student where id=' + id;
    var ep = new EventProxy();
    ep.bind('query', function () {
        client.query(QuerySql, function (err, result) {
            if (err) return callback('执行数据库查询失败！');
            client.end(function (terr, tresult) {
                if (terr) return console.log('断开链接失败')
                console.log('断开链接成功')
            });
            callback(null, result);
        });
    });

    client.query(UpdateSql, function (err, result) {
        if (err) return callback('执行数据库修改失败！');
        ep.emit('query');
    });
};

Shaw.InsertInfo = function (id, name, age, callback) {
    var QuerySql = 'select * from student where id=' + id;
    var InsertSql = "insert into student(id,name,age) values(" + id + ",'" + name + "'," + age + ")";
    var ep = new EventProxy();
    ep.bind('query', function () {
        client.query(QuerySql, function (err, result) {
            if (err) return callback('执行数据库查询失败！');
            client.end(function (terr, tresult) {
                if (terr) return console.log('断开链接失败')
                console.log('断开链接成功')
            });
            callback(null, result);
        });
    });

    client.query(InsertSql, function (err, result) {
        if (err) return callback('执行数据库修改失败！');
        ep.emit('query');
    });
};

//删除
Shaw.DeleteById = function (id, callback) {
    var sql = 'delete from student where id=' + id;
    client.query(sql, function (err, result) {
        if (err) return callback('数据库链接失败！');
        client.end(function (terr, tresult) {
            if (terr) return console.log('断开链接失败')
            console.log('断开链接成功')
        });
        callback(null, { status: 200, data: '删除成功' });
    });
};


// Shaw.QueryInfoById('1', function (err, result) {
//     if (err) return console.log(err);
//     console.log(JSON.stringify(result))
// });

// Shaw.UpdateById(2, 'java', function (err, result) {
//     if (err) return console.log(err);
//     console.log(JSON.stringify(result))
// });

//添加记录
// Shaw.InsertInfo(33, 'new', 16, function (err, result) {
//     if (err) return console.log(err);
//     console.log(JSON.stringify(result))
// });

//删除记录
// Shaw.DeleteById(33, function (err, result) {
//     if (err) return console.log(err);
//     console.log(JSON.stringify(result))
// });




