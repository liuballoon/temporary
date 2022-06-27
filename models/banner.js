import { Http } from "../utils/http"

/**
 * 轮播图
 */
class Banner {

  static param = 'home'

  /**
   * 获取首页顶部轮播图
   */
  static getHomeTopBanner() {
    return Http.request({
      url: `/banner/name/${Banner.param}`
    })
  }
}
     
export {
  Banner
}
