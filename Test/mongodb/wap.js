var mongoose = require('mongoose');
var config = {
    db: 'mongodb://localhost/wap',//mongodb 地址 wap_dev是数据库名称
    "": ""
};


mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    } else {
        console.info('connect to %s ', config.db);
        var Schema = mongoose.Schema;

        var LuserSchema = new Schema({
            mobile:String
        });

        mongoose.model('Luser',LuserSchema);

        var Luser = mongoose.model('Luser');

        var userStore = new Luser({
            mobile: '17765124230'
        });
        console.log(userStore.mobile)

        userStore.save();

    }
});

