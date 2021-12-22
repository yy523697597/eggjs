import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  const counter = app.middleware.counter()

  router.get('/', controller.home.index)
  router.get('/ethan', counter, controller.ethan.index)
  router.get('/list', controller.ethan.getList)
  router.get('/data', controller.ethan.getData)
  router.get('/data/:name/:age', controller.ethan.getDataByName)

  router.post('/add', controller.ethan.add)
  router.post('/edit', controller.ethan.edit)
  router.post('/del', controller.ethan.del)
  router.post('/show', controller.ethan.show)
  router.get('/testGetGirl', controller.home.testGirl)
  router.get('/newContext', controller.ethan.newContext)
  router.post('/newContext', controller.ethan.newContext)

  router.post('/newRequest', controller.ethan.newRequest)
  router.get('/newResponse', controller.ethan.newResponse)

  //  database
  router.get('/addGirl', controller.girlsManager.addGirl)
  router.get('/delGirl', controller.girlsManager.delGirl)
  router.get('/updateGirl', controller.girlsManager.updateGirl)
  router.get('/getGirl', controller.girlsManager.getGirl)
}
