<script setup>
  import { inject,ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { setupUserAuthStore } from '../stores/userAurhStore'  // stores資料夾/userAuthStore的方法(pinia)
  import { FETCH_USER_A } from '../service2/api/user' // services2 資料夾裡面的user.js
  import { storeToRefs } from 'pinia';

  const username = ref('')
  const password = ref('')
  const route = useRoute();

  // 練習定義emit發送
  const emit = defineEmits(['user_name'])

  // 這樣就可以調用swal
  const Swal = inject('$swal') 

  // 把router的方法放進變數裡
  const router = useRouter() 

  // 把創建好的pinia方法放進變數
  const userAuthStore = setupUserAuthStore() 

  

  // FN_SETUP_ACCESSTOKEN方法把Token存進pinia跟cookie
  const { FN_SETUP_ACCESSTOKEN,FN_SETUP_USERINFO } = userAuthStore

  // 送出使用者資料後會進入的函式
  async function onSubmit() {
      const user = {
      username: username.value,
      password: password.value
  };

  // 把使用者資料傳進login物件後發axios把資料post出去驗證是否有該筆資料
  const  {data, message, success} = await FETCH_USER_A.login(user)
  
  await FN_SETUP_USERINFO(data)

  // 練習傳遞emit
  emit('user_name', data.name)

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

  <section class="p-40px col-start-1 col-end-4 row-start-2 row-end-3 lg:col-start-2 flex flex-col justify-center items-center">

        <h1 class="font-bold text-36px m-b-24px leading-[1] text-white lg:text-72px ">登入頁</h1>

        <form @submit.prevent="onSubmit" class="flex flex-col gap-13px max-w-50% min-w-300px">
          <label class="text-white font-bold"  for="">帳號</label>
          <input type="text" v-model="username">
          <label class="text-white font-bold" for="">密碼</label>
          <input type="password" v-model="password">
          <button type="submit" 
            class="  text-center text- black m-t-25px m-b-15px p10px bg-[#EFC862] brightness-50 border-0 rounded-5px transition cursor-pointer 
            hover:border-1px hover:brightness-100 ">登入
          </button>
          <p class="text-#ffffff text-center text-20px">還沒加入會員?
            <router-link 
              to="/singup" 
              class="text-blue-400 p-l-10px hover:text-#EFC862"
              :class="{'!text-#EFC862': route.name == 'singup'}">前往註冊
            </router-link>
          </p>
        </form>

    </section>

</template>

<style>
  *{
    /* outline: 1px solid red; */
  }
</style>