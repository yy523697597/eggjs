const base64Encode = (str) => {
  return new Buffer(str).toString('base64')
}

export default {
  base64Encode,
}
