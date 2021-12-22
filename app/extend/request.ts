// import { Context } from 'egg'

// export default {
//   token(this: Context) {
//     console.log('token ---->', this.get('token'))
//     return this.get('token')
//   },
// }
module.exports = {
  get token() {
    console.log('token', this.get('token'))
    return this.get('token')
  },
}
