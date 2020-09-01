var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/** 获取token */
router.get('/token', async (req, res, next) => {
  let id = req.query.id;
  // 注意默认情况 Token 必须以 Bearer+空格 开头
  const token = 'Bearer ' + jwt.sign({ _id: id }, 'tingo66.com', { expiresIn: 3600 * 24 * 3 })
  res.json({ result: 1, data: token })
});

router.get('/protected', function (req, res) {
  console.log(req.user);
  res.json({ result: 1, data: req.headers })
})

module.exports = router;