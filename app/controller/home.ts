import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('Hello')
  }

  public async testGirl() {
    const { ctx } = this
    const { id } = ctx.query
    console.log('id ---->', id)
    ctx.body = await ctx.service.ethan.getDataById(id)
  }
}
