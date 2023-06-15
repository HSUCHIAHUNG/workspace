<script setup>

  import { ref, onMounted, provide } from 'vue'
  import { RouterView } from 'vue-router'
  import catHeader from "../components/cat_header.vue";
  import cat_leftside from "../components/cat_leftside.vue";
  import cat_footer from "../components/cat_footer.vue";
  import { setupUserAuthStore } from "../stores/index"
  import { computed } from '@vue/reactivity';
  import { storeToRefs } from 'pinia';
  
  const check_cookie = ref('provide_test');
  const store_cookie = setupUserAuthStore();

  // 練習從pinia取token出來用
  const {userAccessToken, userInfo} = storeToRefs(store_cookie);

  // 練習從父層將Token傳provide給cat_header組件接收
  provide('check_cookie', check_cookie.value)

  // 練習使用slot將父層資料放入<catHeader>組件內使用
  // turnover為登入登出按鈕判斷是否有token按鈕文字顯示Login或Logout
  const turnover_toggle = computed(() => userAccessToken.value ? 'Logout/signup' : 'Login/signup')

  // 練習從子層傳遞emit給父層接收
  function header_togle (e) {
    // console.log(e);
  }


  
</script>

<template>
  
  <!-- default_layout -->
  <div class="min-h-100vh w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-contain bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px),1fr)_311px] grid-cols-[1fr_1fr_1fr]
   lg:bg-auto lg:bg-center lg:grid lg:grid-rows-[105px_minmax(calc(100%-309px),1fr)_204px] lg:grid-cols-[163px_1fr]
  ">

    <cat_leftside></cat_leftside>
    
    <!-- turnover : 處理login/logout按鈕字樣切換 -->
    <!-- @header_togle : 練習接收emit -->
    <catHeader :turnover="turnover_toggle" @header_togle="header_togle">

      <!-- 具名插槽(判斷是否有token變換Login或Logout文字) -->
      <template #turnover>
        {{ turnover_toggle }}
      </template>

      <!-- 練習發axios取得使用者資訊並使用solt放到畫面上 -->
      <template #user_name>
        {{ userInfo }}
      </template>

      <!-- 具名作用域插槽(練習從子層取得資料) -->
      <template #scope="{ openval }">
        {{ openval }}
      </template>



    </catHeader >
   
    <RouterView @user_name="user_val" />
  
    <cat_footer></cat_footer>

  </div>
  
</template>

