const Router = require('@koa/router')
const router = new Router()
const music = require('./api/music')
const sell = require('./api/sell')

router.use('/music', music)
router.use('/sell', sell)

module.exports = router