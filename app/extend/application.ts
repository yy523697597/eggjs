const getTime = () => {
  const now = new Date()
  const month = now.getMonth() + 1
  const year = now.getFullYear()
  const date = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  return `${year}年${month}月${date}日 ${hour}:${minute}:${second}`
}

 const currentTime = () => {
  return getTime()
}

export default {
  currentTime,
  get timeProps() {
    return getTime()
  },
}
