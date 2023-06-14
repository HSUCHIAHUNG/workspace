<script setup>

  import { inject,ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { setupUserAuthStore } from '../stores/userAurhStore'  // stores資料夾/userAuthStore的方法(pinia)
  import { FETCH_USER_A } from '../service2/api/user' // services2 資料夾裡面的user.js

</script>

<template>

  <div class="max-w-250px h-screen m-[0_auto] p-2rem text-center">
    <h1 class="text-3.2rem text-center leading-20px">LoginPage</h1>
    <V-Form class="grid gap-4 p-30px">
      <div class="grid">
        <V-Field name="username" rules="required"></V-Field>
        <V-ErrMsg name="username"></V-ErrMsg>
      </div>

      <V-Field name="password" rules="required" type="password"></V-Field>
      <V-ErrMsg name="password"></V-ErrMsg>

      <button type="submit">登入</button>
    </V-Form>
  </div>
  
</template>
