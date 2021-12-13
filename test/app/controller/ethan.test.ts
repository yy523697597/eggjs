import { app } from 'egg-mock/bootstrap'

describe('ethan test', () => {
  it('ethan index', () => {
    return app.httpRequest().get('/ethan').expect(200).expect('<h2>test for ethan</h2>')
  })

  it('ethan getList', async () => {
    await app.httpRequest().get('/list').expect(200).expect('getList test')
  })
})
