import { Service } from 'egg'

class EthanService extends Service {
  public async getDataById(id) {
    return {
      id,
      name: 'ethan',
      age: 18,
    }
  }
}

export default EthanService
