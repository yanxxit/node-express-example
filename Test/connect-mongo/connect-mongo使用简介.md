# connect-mongo使用简介

## 简介
> 该模块用于将session存入mongo中
链接：https://github.com/kcbanner/connect-mongo

## 使用方法

```js
app.use(express.session({
    secret: settings.cookie_secret,
    store: new MongoStore({
      db: settings.db
    })
  }));

```

## 配置说明:(下一行为上一行的翻译)
* db Database name OR fully instantiated node-mongo-native object
db 数据库名称
* collection Collection (optional, default: sessions)
collection 集合名称，默认为sessions
* host MongoDB server hostname (optional, default: 127.0.0.1)
数据库地址，默认为本机
port MongoDB server port (optional, default: 27017)
数据库端口，默认为27017
username Username (optional)
password Password (optional)
auto_reconnect This is passed directly to the MongoDB Server constructor as the auto_reconnect option (optional, default: false).
ssl Use SSL to connect to MongoDB (optional, default: false).
url Connection url of the form: mongodb://user:pass@host:port/database/collection. If provided, information in the URL takes priority over the other options.
mongoose_connection in the form: someMongooseDb.connections[0] to use an existing mongoose connection. (optional)
stringify If true, connect-mongo will serialize sessions using JSON.stringify before setting them, and deserialize them with JSON.parse when getting them. (optional, default: true). This is useful if you are using types that MongoDB doesn't support.