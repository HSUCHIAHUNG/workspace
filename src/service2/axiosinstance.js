import axios from "axios";
import { Swal } from "@/plugins";
import { GET_COOKIES } from "../utils";

const axiosInstance = axios.create({
  baseURL: '/service/api',
});


axiosInstance.interceptors.request.use(function (config) {
  
  // 發送請求前的動作
  const { headers, ...configSetting } = config
  const accessToken = GET_COOKIES() || ''
  // console.log(`headers => ${headers}`);

  // 如果有拿到Token就放行然後回傳使用者資料
  if(accessToken) {
    // 拿到Token
    headers['Authorization'] = `Bearer ${accessToken}`
    // console.log(`accessToken =>${headers['Authorization']}`);
  }
  return {...configSetting, headers};
}, function (error) {

  // 請求發生錯誤要做的動作
  return Promise.reject(error);
});

// 接收response (如果成功才會進來)
axiosInstance.interceptors.response.use(function (response) {
  // data => 使用者資訊跟Token & status => 事件代號
  const {data, status} = response
  // 回傳結果
  return {data, status};   
},// 超出錯誤200會進到下面 error 的函式
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
      window.location.href = '/#/login'
    }
  })
  return Promise.resolve({status, data});
});

export default  { axiosInstance } 