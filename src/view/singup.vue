<script setup>

  import { inject,ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { setupUserAuthStore } from '../stores/userAurhStore'  // stores資料夾/userAuthStore的方法(pinia)
  import { FETCH_USER_A } from '../service2/api/user' // services2 資料夾裡面的user.js

  function onSubmit (val) {
    // console.log(val);
  }

</script>

<template>

  <section class="col-start-1 col-end-4 row-start-2 row-end-3 flex flex-col justify-center items-center lg:col-start-2 lg:col-end-4">

        <h1 class="font-bold text-36px m-b-24px leading-[1] text-white lg:text-72px ">註冊</h1>

        <V-Form @submit="onSubmit" class="flex flex-col gap-10px max-w-50% min-w-400px">
          
          <label for="username" class=" flex flex-col gap-10px text-white p-t-5px"> 姓名
            <V-Field name="username" rules="required" placeholder="請輸入姓名" class=" rounded-5 p-10px border-none "></V-Field>
            <V-ErrMsg name="username" class="text-#EFC862 "></V-ErrMsg>
          </label>

          <label for="userId" class=" flex flex-col gap-10px text-white p-t-5px"> 帳號
            <V-Field name="userId" rules="required" placeholder="請輸入5-20碼英文加數字的帳號" class=" rounded-15px p-10px border-none"></V-Field>
            <V-ErrMsg name="userId" class="text-#EFC862 "></V-ErrMsg>
          </label>

          <label for="password" class=" flex flex-col gap-10px text-white p-t-5px"> 密碼
            <V-Field name="password" rules="required" type="password" placeholder="請輸入6-12碼英文加數字的密碼" class="rounded-15px p-10px border-none"></V-Field>
            <V-ErrMsg name="password" class="text-#EFC862 "></V-ErrMsg>
          </label>

          <label for="password_check" class=" flex flex-col gap-10px text-white p-t-5px"> 密碼
            <V-Field name="password_check" rules="required" type="password" placeholder="請再次輸入密碼" class="rounded-15px p-10px border-none"></V-Field>
            <V-ErrMsg name="password_check" class="text-#EFC862 "></V-ErrMsg>
          </label>
          
          <button class="m-t-15px rounded-15px p-10px border-none">登入</button>

        </V-Form>

    </section>

</template>

<style>
  *{
    /* outline: 1px solid red; */
  }
</style>