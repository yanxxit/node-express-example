var logger = require('../util/log4jsUtil');
var apis = require('../apis');
var _ = require("underscore")._;
var SpellGroupProxy = require('../proxy/SpellGroupProxy');//加密
var config = require('../config');
var ResKit = require('yanxxit-reskit');
var dxlUpload = require("dxl-upload");
var co = require("co")
var path = require("path")
var fs = require("fs");

/**
 * 进入首页
 * @param req
 * @param res
 */
exports.index = function (req, res) {
    var params = ResKit.params(200, { name: 'admin', age: '13', pwd: '123' }, '提示信息')
    console.log(JSON.stringify(params));
    var openid = 'oKXUCj1MOddnp-sCpGi1J1dg3TyM';
    console.log('进入首页');
    res.render('home', { title: 'Hello mohoo!' });
};

exports.socket = function (req, res) {
    var openid = 'oKXUCj1MOddnp-sCpGi1J1dg3TyM';
    console.log('进入首页');
    res.render('socket/index', { title: 'Hello mohoo!' });
};

exports.play = function (req, res) {
    var cookie = req.signedCookies[config.cookie_name]
    console.log(cookie)
    res.render('socket/play', { title: 'websocket', cookie: cookie });
};

exports.dxzq = function (req, res) {
    res.redirect("http://fx.sh.189.cn/mininet/wap/dxzq/detail/3493/00.html?jobNumber=20237&m_id=&")
};

exports.getList = function (req, res) {
    SpellGroupProxy.groupList(function (err, data) {
        if (err || _.isEmpty(data) || data.status != 200) {
            res.json(ResKit.params)
        } else {
            res.json(ResKit.params(200, data.data))
        }
    })
};
exports.createTeam = function (req, res) {
    console.log("创建团队");
    var openid = _.isEmpty(req.session.openid) ? req.signedCookies[config.cookie_name] : req.session.openid;
    SpellGroupProxy.createGroup(openid, function (err, data) {
        if (err || _.isEmpty(data) || data.status != 200) {
            res.json(ResKit.params)
        } else {
            res.json(ResKit.params(200, data.data))
        }
    })
};

exports.submitJoinTeam = function (req, res) {
    console.log("参加团队");
    var itemid = req.body.itemid;
    var openid = _.isEmpty(req.session.openid) ? req.signedCookies[config.cookie_name] : req.session.openid;
    SpellGroupProxy.joinGroup(openid, itemid, function (err, data) {
        if (err || _.isEmpty(data) || data.status != 200) {
            res.json(ResKit.params)
        } else {
            res.json(ResKit.params(200, data.data))
        }
    })
};

/**
 * 伪链接 模式
 * @param req
 * @param res
 */
exports.page = function (req, res) {
    res.json(req.params);
};

exports.uploadHome = function (req, res) {
    res.render('upload', { title: 'Hello mohoo!' });
};

exports.base64 = function (req, res) {
    res.render('base64', { title: 'Hello mohoo!' });
};

exports.base64Down = function (req, res) {
    var imgData = req.body.imgUrl;
    // console.log(imgData)
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    var base = "http://127.0.0.1:8600/express/upload/new/";
    let name = (new Date().getTime()) + ".jpg"
    let dist = path.join(__dirname, "../upload/new/"+name)
    fs.writeFile(dist, dataBuffer, function (err) {
        if (err) {
            res.json(ResKit.params(0, err));
        } else {
            res.json(ResKit.params(0, base+name));
        }
    });
};

exports.upload = function (req, res) {
    console.log(req.files[0]); // 上传的文件信息

    var des_file = "upload/" + req.files[0].originalname;
    console.log(des_file)
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            logger.info(err)
            if (err) {
                res.json(ResKit.params(0, '上传失败'));
            } else {
                var imgurl = config.host + '/' + config.app + '/upload/' + req.files[0].originalname;
                res.json(ResKit.params(200, imgurl));
            }
        });
    });
};

//使用postman 测试图片上传
exports.upload2 = function (req, res) {
    co(function* () {
        var des_file = "/Users/yanxiaoxiao/data/open/node-express-example/upload/"
        let img = new dxlUpload({
            root: des_file,
            path: "img",
            name: "img1"//对应着前端的字段 <input name="img1" type="file" multiple accept="image/png,image/jpeg,video/mp4,audio/mp3"/>
        });
        img.upload(req).then(imgUrl => {
            console.log(imgUrl);
            return res.json(imgUrl)
            return res.json({ status: 0, data: imgUrl })
            // return res.redirect(imgUrl)
        }).catch(e => {
            console.log(e)
            return res.json({ status: 0, data: "上传失败" })
        })
    }).catch(e => {
        console.log(e)
        return res.json({ status: 0, data: "上传失败" })
    });
};