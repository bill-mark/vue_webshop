 function m1(ctx){
	global.console.log('m1')
}

module.exports=function(){
	return async function(ctx,next){
	   console.log('m1 start')
       m1(ctx)
       await next()
       console.log('m1 end')
	}
}