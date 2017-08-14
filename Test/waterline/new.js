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
var myuser = Waterline.Collection.extend({
    identity: 'myuser',
    connection: 'mysql',
    schema: true,
    attributes: {
    //     name: {
    //         type: 'string',
    //         // 校验器  
    //         required: true
    //     },
    //     age: {
    //         type: 'string'
    //     }
    },
    // 生命周期回调  
    beforeCreate: function (value, cb) {
        value.createTime = new Date();
        console.log('beforeCreate executed');
        return cb();
    }
});

var orm = new Waterline();

// 加载数据集合  
orm.loadCollection(myuser);

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
    models.collections.myuser.find({'id':3}).exec(function (err, model) {
        if (err) return res.json({ err: err }, 500);
        console.log(model);
    });

    // models.collections.user.create({username: 'Sid'}, function (err, user) {
    //     console.log('after user.create, err, user:', err, user);
    // });
});


