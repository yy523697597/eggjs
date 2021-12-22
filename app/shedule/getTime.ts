import { Subscription } from 'egg'

export default class GetTime extends Subscription {
  public static get schedule() {
    return {
      interval: '3s',
      type: 'all',
    }
  }
  public async subscribe() {
    console.log('Date.now ---->', Date.now)
  }
}
