/**
 * 使用链接池进行链接
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});

var selectSQL = 'select * from sh_localflow limit 10';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL, function (err, data) {
        if (err) console.log(err);
        console.log("SELECT ==> ");
        console.log(JSON.stringify(data))
        conn.release();
    });
});