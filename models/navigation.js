import { Http } from "../utils/http"

/**
 * 导航
 */
class Navigation {

  static getAllNavigations() {
    return Http.request({
      url: '/navigation/all'
    })
  }
}

export {
  Navigation
}
