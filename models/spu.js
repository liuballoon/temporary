import { Http } from "../utils/http"

/**
 * 商品
 */
class Spu {

  static getSpu() {
    return Http.request({
      url: '/spu/page'
    })
  }

  static getSpuDetailById(spuId) {
    return Http.request({
      url: `/spu/detail/${spuId}`
    })
  }
}

export {
  Spu
}
