import { Http } from "../utils/http"

/**
 * 类目
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

  static getDisplayRootId(rootCategories) {
    // TODO: 从顶级类目中，找出默认展示类目的Id并返回
    return 3;
  }
}

export {
  Category
}
