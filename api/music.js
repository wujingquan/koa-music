const Router = require('@koa/router');
const axios = require('axios');

const router = new Router()

router.get('/getDiscList', async (ctx, next) => {
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

router.post('/getPurlUrl', async (ctx, next) => {
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

router.get('/getCdInfo', async (ctx, next) => {
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

router.get('/lyric', async (ctx, next) => {
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

router.get('/search', async (ctx, next) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';
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

module.exports = router.routes();