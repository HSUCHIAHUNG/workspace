// user資料處理
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {SET_COOKIES, REMOVE_COOKIES} from '../utils/js-cookie'


export const setupUserAuthStore = defineStore('user-auth-store', ()=> {
  const userInfo = ref({})  // user-auth-store唯一值(自己命名)
  
  const userAccessToken = ref('')

  function FN_SETUP_USERINFO (respUserInfo) {
    return new Promise((resolve)=> {
      userInfo.value = respUserInfo || {}
      resolve()  // resolve才會把異步的任務作結束 resolve 、reject 方法
    })
  }  

  // console.log(userInfo.value);

  // 把token存進userAccessToken變數當中，讓後在存進cookie
  function FN_SETUP_ACCESSTOKEN (token) {
    return new Promise((resolve)=> {
      userAccessToken.value = token
      SET_COOKIES(token)
      resolve()
    })
  }

  function FN_LOGOUT () {
    return new Promise((resolve)=> {
      FN_SETUP_ACCESSTOKEN('')
      FN_SETUP_USERINFO({})
      REMOVE_COOKIES()
      resolve()
    })
  }
  return {
    userInfo,
    userAccessToken,
    FN_LOGOUT,
    FN_SETUP_ACCESSTOKEN,
    FN_SETUP_USERINFO
  }
})