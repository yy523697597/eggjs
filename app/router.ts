import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  router.get('/ethan', controller.ethan.index)
  router.get('/list', controller.ethan.getList)
  router.get('/data', controller.ethan.getData)
  router.get('/data/:name/:age', controller.ethan.getDataByName)

  router.post('/add', controller.ethan.add)
  router.get('/testGetGirl', controller.home.testGirl)
}
