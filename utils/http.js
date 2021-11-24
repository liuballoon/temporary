import { API } from "../core/api"
import { makePromise } from "./make-promise"

/**
 * 封装HTTP
 */
class Http {

  static async request({ url, data, method = 'GET' }) {
    const res = await makePromise(wx.request)({
      url: API.baseApi + url,
      data,
      method
    })
    return res.data.data
  }
}

export {
  Http
}
