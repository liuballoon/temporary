import { config } from "../core/config"
import { makePromise } from "./make-promise"

/**
 * 封装HTTP
 */
class Http {

  static async request({ url, data, method = 'GET' }) {
    const res = await makePromise(wx.request)({
      url: config.baseApi + url,
      data,
      method
    })
    return res.data.data
  }
}

export {
  Http
}
