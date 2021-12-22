import { Context } from 'egg'

export default function counterMiddleWare(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    if (ctx.session.counter) {
      ctx.session.counter++
    } else {
      ctx.session.counter = 1
    }
    await next()
  }
}
