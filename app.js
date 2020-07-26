const Koa = require('koa');
const router = require("@koa/router")();

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
