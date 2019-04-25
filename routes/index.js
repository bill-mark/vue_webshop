const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa is 2!'
  }) 
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookis:ctx.cookies.get('pvid')
  }
})

router.get('/testAsync',async(ctx)=>{
	global.console.log('start',new Date().getTime())
	const a = await new Promise((resolve,reject)=>{
		setTimeout(function (){
          global.console.log('async a',new Date().getTime())
          resolve('hhy')
		},1000)
	})
	const b = await 12
	ctx.body={a,b}
})

module.exports = router