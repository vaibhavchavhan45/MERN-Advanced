import { Hono} from 'hono'
import type { Context, Next } from 'hono'

const app = new Hono()

async function authMiddleware(c: Context, next: Next){
    if(c.req.header("Authorization")){
      await next()
    }
    else{
      return c.text("You don't have an access")
    }
}

app.post('/', authMiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query('param')); //req : ?param=1234
  
  return c.json({
    msg : "Hello Hono!"
  })
})

export default app
