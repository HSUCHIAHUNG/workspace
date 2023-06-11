<script setup>
  import { ref,onBeforeUnmount,watch  } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { setupUserAuthStore } from "../stores/userAurhStore" // stores資料夾/userAuthStore的方法(pinia)

  const emit  = defineEmits(['enav_val']) 
  const props = defineProps(['pnav_val'])

  const userAuthStore = setupUserAuthStore()
  const {FN_LOGOUT} = userAuthStore

  /* header開關按紐 */  
  const open = ref(false)
  const route = useRoute();
  const router = useRouter();
  // 定義emit

  const isOpen = () => {
    open.value = !open.value
    emit('enav_val', open.value)
    // console.log(props.pnav_val);
  }

  watch(
    () => router.currentRoute.value,
    () => {
      open.value = !open.value; 
      // console.log(router.currentRoute.value.path);
    }
  );

  const Logout = () => {
    FN_LOGOUT()
    window.location.reload();
  }

  
</script>

<template>

  <header  class="w-full duration-500 fixed z-10 text-center
      lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4 lg:w-auto lg:h-auto lg:static lg:bg-transparent">
      <!-- 開起選單按鈕 -->
      <div 
        class=" flex justify-end p-20px lg:p-0">
        <img @click = isOpen src="../assets/cat/Vector.png" class="lg:hidden p-t-10px" alt="">
      </div>
      <nav :class="{ 'h-100vh': open, 'h-0': !open }" class=" h-0vh duration-500 overflow-hidden fixed top-0 right-0 left-0 m-auto bg-#232526 
        lg:static lg:m-0 lg:bg-transparent lg:w-90%  lg:h-initial lg:flex lg:flex-row-reverse lg:items-center lg:p-40px">
        <ul class="flex flex-col items-center  text-white font-bold
        lg:flex lg:flex-row lg:items-center" >
          <!-- 關閉選單按鈕 -->
          <li class="w-50px self-end block lg:hidden">
            <img @click = isOpen src="../assets/cat/close.svg"  class=" p-20px " alt="">
          </li>
            <li class="   lg:pr-55px  p-10px text-#EFC862  w-50px">
              <router-link to="/" class="text-#EFC862">Home</router-link>
            </li>
            <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
              <router-link to="catb" class="text-#ffffff">Article</router-link>
            </li>
            <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
              <router-link to="catc" class="text-#ffffff">About</router-link>
            </li>
            <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
              <router-link to="/cat_supplies" class="text-#ffffff">Location</router-link>
            </li> 
            <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
              <a href="javascript:;" @click="Logout" class="text-#ffffff">Logout</a>
            </li>
            <li class="p-20px w-50px lg:p-0 lg:w-fit">
              <img src="../assets/cat/zoom_in_24px.png" alt="" class=" lg:w-full ">
            </li>
        </ul>
      </nav>
    </header>

</template>

