import axios from "axios";
import { Swal } from "../plugins/swal";
import { GET_COOKIES } from "../utils/js-cookie";

const axiosInstance = axios.create({
  baseURL: '/service/api',
});

axiosInstance.interceptors.request.use(function (config) {

  // console.log({config});
  const { headers, ...configSetting } = config

  // 跟cookie取得Token
  const accessToken = GET_COOKIES() || ''

  // 如果有拿到Token就把Token存進header裡面
  if(accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }
  return {...configSetting, headers};
}, function (error) {
  // 請求發生錯誤要做的動作
  return Promise.reject(error);
});

// 接收response 
axiosInstance.interceptors.response.use(function (response) {
  // data => 使用者資訊跟Token & status => http的status code
  const {data, status} = response
  return {data, status};   
},
// 如果使用者登入驗證沒有通過就會進到error函式
function (error) { 
  const { response = {} } = error
  const { status, data = {} } = response
  // 顯示錯誤彈窗
  Swal.fire({
    icon: 'error',
    text: data.message || '',
    timer: 3000,
    timerProgressBar: true
  }).then(()=> {
    if(status === 401) {
      // window.location.href = '/#/login'
    }
  })
  return Promise.resolve({status, data});
});

export { axiosInstance }