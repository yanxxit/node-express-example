/**  
   * 演示 waterilne 的使用  
   */

var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');
var mongoAdapter = require('sails-mongo');

// 适配器  
var adapters = {
    mongo: mongoAdapter,
    mysql: mysqlAdapter,
    default: 'mysql'
};

// 连接  
var connections = {
    // mongo: {
    //     adapter: 'mongo',
    //     url: 'mongodb://localhost/watereline-sample'
    // },
    mysql: {
        adapter: 'mysql',
        url: 'mysql://root:root@localhost:3306/telecom-wx'
    }
};

// 数据集合  
var student = Waterline.Collection.extend({
    identity: 'student',
    connection: 'mysql',
    schema: true,
    attributes: {
            name: {
                type: 'string',
                // 校验器  
                required: true
            },
            age: {
                type: 'string'
            }
    }, migrate: 'safe'
});

var orm = new Waterline();

// 加载数据集合  
orm.loadCollection(student);

var config = {
    adapters: adapters,
    connections: connections
}

orm.initialize(config, function (err, models) {
    if (err) {
        console.error('orm initialize failed.', err)
        return;
    }

    //  console.log('models:', models);  
    console.log();
    models.collections.student.find({ 'id': 3 }).exec(function (err, model) {
        if (err) return console.log(err);
        console.log(model);
    });
});


