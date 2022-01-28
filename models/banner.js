import { Http } from "../utils/http"

/**
 * 轮播图业务类
 */
class Banner {

  static home = 'home'

  static getHomeTopBanner() {
    return Http.request({
      url: `/banner/name/${Banner.home}`
    })
  }
}
     
export {
  Banner
}
