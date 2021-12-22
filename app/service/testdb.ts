import { Service } from 'egg'

export default class TestDBService extends Service {
  public async addGirl(params) {
    try {
      const { app } = this
      const res = await app.mysql.insert('girls', params)
      return res
    } catch (err) {
      console.log(err)
      return null
    }
  }
  public async delGirl(id) {
    try {
      const { app } = this
      const res = await app.mysql.delete('girls', id)
      return res
    } catch (err) {
      console.log('delete girl error ---->', err)
      return null
    }
  }
  public async updateGirl(params) {
    try {
      const { app } = this
      const res = await app.mysql.update('girls', params)
      return res
    } catch (err) {
      console.log('update girls error ---->', err)
      return null
    }
  }
  public async getGirl() {}
}
