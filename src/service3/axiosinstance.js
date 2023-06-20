import axios from "axios";
import Swal from "sweetalert2";
import { GET_COOKIES } from "../utils/js-cookie";

/* ------------- 此api為Login時使用 --------------- */


// 創建一個axios自定義實例，在預設值當中放入預設網址
const axiosInstance = axios.create({
  baseURL: '/service/api',
});

// 發送請求前的動作
axiosInstance.interceptors.request.use(function (config) {
  const { headers, ...configSetting } = config

  // 跟cookie取得Token
  const accessToken = GET_COOKIES() || ''
  if(accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  return {...configSetting, headers};

},function (error) {
  return Promise.reject(error);
});


// 接收回應
axiosInstance.interceptors.response.use(function (response) {
  const { status,  data:respData = {}} = response
  const {data, message, success} = respData
  const album_list = data.data

  // 如果回傳false代表登入失敗跳錯誤彈窗
  if(!success){
    Swal.fire({
      icon: 'warning',
      text: message,
      timer: 1500,
      timerProgressBar: true,
    })
  }

  return {status , data, album_list, message, success};

}, function (error) {
  return Promise.reject(error);
});


export { axiosInstance }