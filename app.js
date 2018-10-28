const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const axios = require('axios');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const debug = process.env.NODE_ENV !== 'production'

router.get('/api/getDiscList', async (ctx, next) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  const ret = await axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.post('/api/getPurlUrl', async (ctx, next) => {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';
  const ret = await axios.post(url, ctx.request.body, {
    headers: {
      referer: 'https://y.qq.com/',
      origin: 'https://y.qq.com',
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })
  ctx.body = ret;
});

router.get('/api/getCdInfo', async (ctx, next) => {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
  const ret = await axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

router.get('/api/lyric', async (ctx, next) => {
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';
  const ret = await axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: ctx.query
  }).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })

  ctx.body = ret;
});

// // 加载中间件
app.use(bodyParser());
debug && app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, '127.0.0.1');