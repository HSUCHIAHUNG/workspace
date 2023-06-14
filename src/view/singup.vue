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

        <V-Form @submit="onSubmit" class="flex flex-col gap-5px max-w-50% min-w-300px">
          
          <label for="username">123</label>
          <V-Field name="username" rules="required"></V-Field>
          <V-ErrMsg name="username"></V-ErrMsg>
          
          <V-Field name="password" rules="required" type="password"></V-Field>
          <V-ErrMsg name="password"></V-ErrMsg>

          <button type="submit">登入</button>

        </V-Form>

    </section>

</template>

<style>
  *{
    outline: 1px solid red;
  }
</style>