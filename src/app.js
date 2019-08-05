const Koa = require('koa')
const morgan = require('koa-morgan')
const helmet = require('koa-helmet')
const koaBody = require('koa-body')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const { add } = require('#/adder')

router
  .get('/', async ctx => {
    ctx.body = 'Hello World'
  })
  .post('/add', async ctx => {
    ctx.body = {
      result: add(ctx.request.body.numbers),
    }
  })
  .get('/this-is-json', async ctx => {
    ctx.body = {
      'this-is-key': 'this-is-value',
    }
  })

app
  .use(morgan('combined'))
  .use(helmet())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = {
  app,
}
