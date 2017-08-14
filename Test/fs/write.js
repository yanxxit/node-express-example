var fs = require('fs');
var path = require('path');
var moment = require('moment');
var config = {
    version: 'v' + moment().format('YYYYMMDD'),
    name: '微厅前端版本配置信息'
};
var info = "var build =" + JSON.stringify(config) + ";  module.exports = build;";
fs.writeFile(path.join(__dirname, 'config/build.config.js'), info, {encoding: 'utf-8'}, function (err) {
    if (err) console.log('写入失败');
    console.log("Export Account Success!");
});

//fs.writeFile(path.join(__dirname, 'config/data.txt'), info, {encoding: 'utf-8'}, function (err) {
//    if (err) console.log('写入失败');
//    console.log("Export Account Success!");
//});
//fs.mkdir(path.join(__dirname, 'data'));
//console.log(fs)

