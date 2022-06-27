import { Http } from "../utils/http"

/**
 * 专题
 */
class Theme {

  static getAllThemes() {
    return Http.request({
      url: '/theme/all'
    })
  }
}

export {
  Theme
}
