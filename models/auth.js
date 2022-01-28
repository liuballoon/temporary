import { Http } from "../utils/http"

/**
 * 权限业务类
 */
class Auth {

  /**
   * 登录
   * 
   * @param {登录凭证} code
   */
  static async login(code) {
    const res = await Http.request({
      url: '/auth/login',
      method: 'POST',
      data: {
        account: code,
        loginWay: 1
      }
    })
    console.log("login res", res)
  }
}

export {
  Auth
}
