
import { setupUserAuthStore } from "../stores/userAurhStore" // stores資料夾/userAuthStore的方法(pinia)
import { FETCH_USER } from "../service/index" // 登入post資料並取的使用者資訊
import { GET_COOKIES } from "../utils/js-cookie" 

// 設置路由權限
export function setupRoutePermission (routerInstane) {
    
    routerInstane.beforeEach(async (to,from)=> {
      
      // 把創建好的pinia方法放進變數
      const userAuthStore = setupUserAuthStore()
  
      // 登入成功把Token存進pinia跟cookie
      // 登出把Token、使用者資訊、cookie 清除
      // FN_SETUP_USERINFO 使用者資訊存入store
      const {FN_LOGOUT, FN_SETUP_USERINFO, FN_SETUP_ACCESSTOKEN} = userAuthStore
  
      // 取得Token
      const userAccessToken = GET_COOKIES() || ''
      
      // 把Token放進去pinia跟cookie
      await FN_SETUP_ACCESSTOKEN(userAccessToken)

      if (to.path == '/catc' ) {
        alert('請登入會員')
        return false 
      }

      // 如果當前頁面是首頁就進來判斷
      if(to.path != '/Login') {
        
      // 如果沒有Token就導向登入頁面
        if(!userAccessToken) {
          return '/Login'
          
      // 有Token就取得使用者資訊存進data
        } else {
          const { data={} , status } = await FETCH_USER.getUserInfo()
          const { result } = data
      // 如果status code = 200就把使用者資訊存進pinia
          if(status === 200) {
            FN_SETUP_USERINFO(data)
            // FN_SETUP_USERINFO(result)
            return true
  
      // 否則清除使用者資訊後導向登入頁面
          } else {
            await FN_LOGOUT()
            return '/Login'
          }
        }
      }

      // 如果當前頁面是登入頁面就判斷是否有Token，回傳false，否則回傳true
      if(to.path == '/Login') {
        if(userAccessToken) {
          return false
        } else {
          return true
        }
      }
    })
  }