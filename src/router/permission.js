
import { setupUserAuthStore } from "../stores/userAurhStore" // stores資料夾/userAuthStore的方法(pinia)
import { FETCH_USER } from "../service/index" // 登入post資料並取的使用者資訊
import { GET_COOKIES } from "../utils/js-cookie" 
import Swal from "sweetalert2";


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
    
    // 如果當前頁面是登入頁面就判斷是否有Token，回傳false，否則回傳true
    if (to.path == '/Login') {
      if (userAccessToken) {
        const confirmLogout = await Swal.fire({
          icon: 'question',
          text: '您確定要登出嗎？',
          showCancelButton: true,
          confirmButtonText: '確定',
          cancelButtonText: '取消',
        });
    
        if (confirmLogout.isConfirmed) {
          await FN_LOGOUT();
          Swal.fire({
            icon: 'success',
            text: '登出成功',
            timer: 1500,
            timerProgressBar: true,
          });
          return '/Login';
        } else {
          return false; // 用户取消登出，返回 null 或其他适当的值
        }
      } else {
        return true;
      }
    }

        // 如果即將前往catc這個分頁就跳alert後停留在原本的頁面
    if (to.path !== '/catc') return;

    if (to.path == '/catc' && !userAccessToken) {
      alert('請登入會員')
      return false
    } else {
      return true;
    }
  })
}