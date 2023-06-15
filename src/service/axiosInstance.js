import axios from "axios";
import { Swal } from "../plugins/swal";
import { GET_COOKIES } from "../utils/js-cookie";

/* ------------- 此api為Router更新頁面時使用 --------------- */

// 創建axios實例並給定預設網址
const axiosInstance = axios.create({
  baseURL: '/service/api',
});

axiosInstance.interceptors.request.use(function (config) {

  const { headers, ...configSetting } = config

  // 跟cookie取得Token
  const accessToken = GET_COOKIES() || ''
  
  // 如果有拿到Token就把Token存進header裡面
  if(accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  return {...configSetting, headers};
}, 
  function (error) {
    return Promise.reject(error);
  });


// 接收response 
axiosInstance.interceptors.response.use(function (response) {
  // data => 使用者資訊跟Token & status => http的status code
  const { status,  data:respData = {}} = response
  const {data, message, success} = respData

  // 回傳結果
  return {data, status};   
},

// 如果使用者登入驗證沒有通過就會進到error函式
function (error) { 
  const { response = {} } = error
  const { status, data = {} } = response

  // 如果回傳false代表登入失敗跳錯誤彈窗並導向Login頁面
  Swal.fire({
    icon: 'error',
    text: data.message || '',
    timer: 3000,
    timerProgressBar: true
  }).then(()=> {
    if(status === 401) {
      window.location.href = '/#/login'
    }
  })
  return Promise.resolve({status, data});
});

export { axiosInstance }