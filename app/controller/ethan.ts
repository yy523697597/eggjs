import { Controller } from 'egg'

class EthanController extends Controller {
  public async index() {
    const { ctx, app } = this
    const username = ctx.session.username
    console.log(ctx.session.counter)

    await ctx.render('404.ejs', {
      id: 2021,
      name: 'Ethan Yu',
      age: 18,
      skills: ['sing', 'pc', 'kill'],
      username,
      nowTime: (app as any).currentTime(),
    })
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
    ctx.cookies.set('user', 'ethan', {
      maxAge: 1000 * 2,
      httpOnly: false,
      encrypt: true,
    })
    ctx.session.username = 'ethan'
    ctx.body = {
      status: 200,
      data: 'cookie 添加成功',
    }
  }
  public async del() {
    const { ctx } = this
    ctx.cookies.set('user', null)
    ctx.session.username = null
    ctx.body = {
      status: 200,
      data: 'cookie 删除成功',
    }
  }
  public async edit() {
    const { ctx } = this
    ctx.cookies.set('user', 'bilibili')
    ctx.body = {
      status: 200,
      data: 'cookie 编辑成功',
    }
  }
  public async show() {
    const { ctx } = this
    const user = ctx.cookies.get('user')
    console.log('user ---->', user)
    ctx.body = {
      status: 200,
      data: 'cookie 读取成功',
    }
  }

  public async newContext() {
    const { ctx } = this
    const params = ctx.params()
    console.log('params ---->', params)
    ctx.body = 'new context'
  }

  public async newRequest() {
    const { ctx } = this
    const token = ctx.request.token
    console.log('token ---->', token)
    ctx.body = {
      status: 200,
      body: token,
    }
  }

  public async newResponse() {
    const { ctx } = this
    ctx.response.token = ctx.helper.base64Encode('ethan yu')
    ctx.body = 'new response'
  }
}

export default EthanController
