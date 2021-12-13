import { Controller } from 'egg'

class EthanController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = '<h2>test for ethan</h2>'
  }

  public async getList() {
    const { ctx } = this

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve((ctx.body = 'getList test'))
      }, 5000)
    })
  }

  public async getData() {
    const { ctx } = this
    ctx.body = await ctx.service.ethan.getDataById(ctx.query.id)
  }

  public async getDataByName() {
    const { ctx } = this
    ctx.body = ctx.params.name + ' ' + ctx.params.age + '岁'
  }

  public async add() {
    const { ctx } = this
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    }
  }
}

export default EthanController
