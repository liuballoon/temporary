/**
 * 使微信小程序内置API支持Promise
 * 
 * @param {微信小程序内置API} wxApi 
 */
const makePromise = function (wxApi) {
  return function (param) {
    return new Promise((resolve, reject) => {
      Object.assign(param, {
        success: res => {
          resolve(res)
        },
        fail: res => {
          reject(res)
        }
      })
      wxApi(param)
    })
  }
}

export {
  makePromise
}
