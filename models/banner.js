import { Http } from "../utils/http"

/**
 * 轮播图业务类
 */
class Banner {

  static homeTop = 'home-top'

  static getHomeTopBanner() {
    return Http.request({
      url: `/banner/name/${Banner.homeTop}`
    })
  }
}
     
export {
  Banner
}
