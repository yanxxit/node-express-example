
var mongoose = require('mongoose');    //引用mongoose模块


var MongoConfig = {
    db: 'mongodb://localhost/wap_dev'
};


var db = mongoose.createConnection('localhost', 'new'); //创建一个数据库连接
//db.on('error',console.error.bind(console,'连接错误:'));
//db.once('open',function(){
//    console.log('一次打开记录')
//});

//Person的文本属性
var PersonSchema = new mongoose.Schema({
    name: String
});

var PersonModel = db.model('Person', PersonSchema);//Person的数据库模型

//Person实体
var PersonEntity = new PersonModel({
    name: '17765124230'
});
console.log(PersonEntity.mobile); //Krouky
console.log(PersonEntity);
PersonEntity.save(function(err){
    console.log(err)
});
