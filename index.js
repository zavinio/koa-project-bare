// index.js - startup code 
const Koa = require('koa');


const app = module.exports = new Koa();


app.use(async (ctx, next) => {
    if ('/' !== ctx.path) return await next();
    ctx.body = 'Hello World';
});


if (!module.parent) app.listen(3000);
console.log("Listening on port 3000");
