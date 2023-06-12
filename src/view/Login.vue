<script setup>
import { inject,ref } from 'vue';
import { useRouter } from 'vue-router';
import { setupUserAuthStore } from '../stores/userAurhStore'  // stores資料夾/userAuthStore的方法(pinia)
import { FETCH_USER_A } from '../service2/api/user' // services2 資料夾裡面的user.js
import Swal from "sweetalert2";

const username = ref('')
const password = ref('')

// 這樣就可以調用swal
// const Swal = inject('$swal') 

// 把router的方法放進變數裡
const router = useRouter() 

// 把創建好的pinia方法放進變數
const userAuthStore = setupUserAuthStore() 

// FN_SETUP_ACCESSTOKEN方法把Token存進pinia跟cookie
const { FN_SETUP_ACCESSTOKEN } = userAuthStore

// 送出使用者資料後會進入的函式
async function onSubmit() {
    const user = {
    username: username.value,
    password: password.value
  };

  // 把使用者資料傳進login物件後發axios把資料post出去驗證是否有該筆資料
  const  {data, message, success} = await FETCH_USER_A.login(user)


  // 如果驗證沒有通過就直接return
  if(!success) return 

  // 如果驗證有通過執行以下函式，把data解構取得Token出來用
  const {accessToken} = data

  // 把取得到的Token存入store跟cookie後跳成功彈窗，在將使用者導向首頁
  await FN_SETUP_ACCESSTOKEN(accessToken)  
    Swal.fire({
      icon: 'success',
      text: message,
      timer: 3000,
      timerProgressBar: true
    }).then(()=> {
      router.push('/')
    })
  }
</script>

<template>
  <section class="p-40px col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2 flex flex-col justify-center items-center">

        <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px ">登入頁</h1>
        <form @submit.prevent="onSubmit" class="flex flex-col gap-10px max-w-50% min-w-300px">
          <label class="w-100 text-white font-bold"  for="">帳號</label>
          <input type="text" v-model="username">
          <label class="text-white font-bold" for="">密碼</label>
          <input type="text" v-model="password">
          <button type="submit" class="  text-center  m-t-25px p10px bg-transparent border-0 rounded-5px transition  hover:border-1px transition border border-gray-400 duration-5550 ">登入</button>
        </form>

    </section>
</template>

<style>
    *{
        /* border: 1px solid red; */
    }
</style>