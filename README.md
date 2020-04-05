[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/shawflying/node-express-example) 

# node-express-example
http://127.0.0.1:8600/express/get?admin=1
## Express 项目模板
* 项目结构
* 常用结构
* 常用语法
* 常用通用工具
* 常用的工具


## 常用功能
* 分享功能
* 加解密
*

## 执行命令

安装全部依赖
```
npm install
```


启动服务
```
node index
```

安装 拓展依赖
```
cnpm install --dev
```

压缩代码图片样式

```
gulp test
```

### docker

```sh
docker build .
docker run -d -p 8600:8600 831cb570e9aa
```

### 目录结构
<pre>
.
├── README.md               // 项目描述
├── controllers             // 控制器
├── doc                     // 项目文档
├── package.json            // 项目配置文件
├── logs                    // 项目日志
├── middlewares             // 中间件
├── proxy                   // 接口代理
├── public                  // 静态资源
├── rest                    // rest
├── Test                    // 普通测试
├── UnitTest                // 简单单元测试
├── util                    // 工具库
├── view                    // 视图
├── apis.js                 // 接口文件
├── config.js               // 项目 配置文件
├── router.js               // router 配置文件
├── unit.js                 // 单元测试入口
└── index.js                // 项目入口
</pre>

### 参考链接
* [node.js官方地址](https://nodejs.org/en/)
* [express使用指南](http://www.expressjs.com.cn/)
* [node.js Express 框架](http://www.runoob.com/nodejs/nodejs-express-framework.html)