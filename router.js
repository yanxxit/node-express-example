var express = require('express');
var router = express.Router();
var home = require('./controllers/home');
var redis = require('./controllers/redis');
var auth = require('./middlewares/auth');


router.get('/express/index', home.index);//进入首页,auth.authWxUser
router.get('/express/get', home.get);//进入首页,auth.authWxUser
router.get('/express/redis/login', redis.login);
router.get('/express/redis/main', redis.main);
router.get('/express/redis/keys', redis.keys);
router.post('/express/redis/values', redis.values);



router.get('/express/home/page/:id', home.page);//进入首页,auth.authWxUser
router.get('/express/home/page/:id/p/:name', home.page);//进入首页,auth.authWxUser


router.get('/express/upload/index', home.uploadHome);//上传功能
router.get('/express/upload/base64', home.base64);//上传功能
router.post('/express/upload/base64', home.base64Down);//上传功能
router.post('/express/upload', home.upload);//图片上传
router.post('/express/upload2', home.upload2);//图片上传

router.get('/express/socket', home.socket);//进入首页,auth.authWxUser
router.get('/express/play', home.play);//进入首页,auth.authWxUser
router.get('/express/t/dxzq', home.dxzq);//跳转链接
router.get('/express/spellGroup/getList', home.getList);//获取列表
router.post('/express/spellGroup/createTeam', home.createTeam);//创建团队
router.post('/express/spellGroup/submitJoinTeam', home.submitJoinTeam);//请求进入


module.exports = router;