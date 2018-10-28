const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const debug = process.env.NODE_ENV !== 'production'

router.get('/api/seller', (ctx, next) => {
  ctx.body = { errno: 0, data: seller };
});

router.get('/api/goods', (ctx, next) => {
  ctx.body = { errno: 0, data: goods };
});

router.get('/api/ratings', (ctx, next) => {
  ctx.body = { errno: 0, data: ratings };
});

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

router.get('/api/getPurlUrl', async (ctx, next) => {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';
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

// // 加载中间件
debug && app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, '127.0.0.1');