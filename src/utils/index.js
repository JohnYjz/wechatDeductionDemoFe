export default {
  deepClone (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  getObjFromArr (arr = [], { keyName = 'id', valName = 'name' } = {}) {
    const obj = {}
    arr.forEach(item => {
      const key = item[keyName]
      const val = item[valName]
      obj[key] = val
    })
    return obj
  }
}
