const Router = require('@koa/router')
const mockData = require('../database/data.json');

const seller = mockData.seller;
const goods = mockData.goods;
const ratings = mockData.ratings;

const router = new Router()

router.get('/seller', (ctx, next) => {
  ctx.body = { errno: 0, data: seller };
});

router.get('/goods', (ctx, next) => {
  ctx.body = { errno: 0, data: goods };
});

router.get('/ratings', (ctx, next) => {
  ctx.body = { errno: 0, data: ratings };
});


module.exports = router.routes();