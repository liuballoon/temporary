import { Http } from "../utils/http"

/**
 * 类目业务类
 */
class Category {

  static getRootCategories() {
    return Http.request({
      url: '/category/root/all'
    })
  }

  static getSubCategoriesByRootId(rootId) {
    return Http.request({
      url: '/category/root/subs',
      data: {
        rootId
      }
    })
  }
}

export {
  Category
}
