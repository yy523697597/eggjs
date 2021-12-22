import 'egg'

declare module 'egg' {
  interface Response {
    token: string
  }
  interface Request {
    token: string
  }
  interface Application {
    mysql: any
  }
}
