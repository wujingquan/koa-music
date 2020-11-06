const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router')

const app = new Koa();

const debug = process.env.NODE_ENV !== 'production'

// 加载中间件
app.use(bodyParser());
debug && app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, '127.0.0.1');