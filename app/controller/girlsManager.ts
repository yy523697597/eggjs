import { Controller } from 'egg'

export default class GirlsManager extends Controller {
  public async addGirl() {
    const { ctx } = this
    const params = {
      name: 'xiaobai',
      age: 18,
      skill: 'sing',
    }
    await ctx.service.testdb.addGirl(params)
    ctx.body = '添加成功'
  }
  public async delGirl() {
    const { ctx } = this
    const id = {
      id: 1,
    }
    const res = await ctx.service.testdb.delGirl(id)
    console.log('res ---->', res);
    if (res) {
      ctx.body = '删除成功'
    } else {
      ctx.body = '删除失败'
    }
  }
  public async updateGirl() {
    const { ctx } = this
    const params = {
      id: 1,
      name: 'ethan',
      age: 28,
      skill: 'coding',
    }
    await ctx.service.testdb.updateGirl(params)
    ctx.body = '更新成功'
  }
  public async getGirl() {
    const { ctx } = this
    ctx.body = '查询女生'
  }
}
