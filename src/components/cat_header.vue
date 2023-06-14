<script setup>
  import { watch, ref, onMounted, computed, inject  } from 'vue';
  import { useRouter, useRoute } from 'vue-router';


  // 練習接收props
  const props = defineProps(['turnover'])

  // 練習定義emit發送
  const emit = defineEmits(['header_togle'])

  // 練習用provide、inject從父層將Token傳到子層做接收
  const check_cookie = inject('check_cookie')

  // header開關按紐  
  const open = ref(false);
  const router = useRouter();
  const route = useRoute();

  // 點擊漢堡按鈕控制header開關
  const isOpen = () => {
    open.value = !open.value
    // 練習傳遞emit
    emit('header_togle', open.value)
    // 練習接收props
    // console.log(props.turnover);
  }

  // 如果router變動就，控制手機板header開關
  watch(
    () => router.currentRoute.value,
    () => {
      open.value = !open.value; 
    }
  );
  
</script>

<template>

  <header class="w-full duration-500 fixed z-10 text-center
    lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4 lg:w-auto lg:h-auto lg:static lg:bg-transparent">
      <!-- 開起選單按鈕 -->
    <div 
      class=" flex justify-end p-20px lg:p-0">
      <img @click = isOpen src="../assets/cat/Vector.png" class="lg:hidden p-t-10px" alt="">
    </div>

    <nav :class="{ 'h-100vh': open, 'h-0': !open }" class=" h-0vh duration-500 overflow-hidden fixed top-0 right-0 left-0 m-auto bg-#232526 
      lg:static lg:m-0 lg:bg-transparent lg:w-90%  lg:h-initial lg:flex lg:flex-row-reverse lg:items-center lg:p-40px">
      <ul class="flex flex-col items-center  text-white font-boldlg:flex lg:flex-row lg:items-center" >

        <!-- 關閉選單按鈕 -->
        <li class="w-auto self-end block lg:hidden">
          <img @click = isOpen src="../assets/cat/close.svg"  class=" p-20px " alt="">
        </li>

        <!-- router link -->
        <li class=" lg:pr-75px p-10px w-auto">
          <router-link     
            to="/" 
            class="text-white  hover:text-#EFC862"
            :class="{'!text-#EFC862': route.name == 'cata'}">Home
          </router-link>
        </li>

        <li class="   lg:pr-75px  p-10px  w-auto">
          <router-link 
            to="catb"
            class="text-#ffffff hover:text-#EFC862"
            :class="{'!text-#EFC862': route.name == 'catb'}">Article
          </router-link>
        </li>

        <li class="   lg:pr-75px  p-10px  w-auto">
          <router-link 
            to="catc" 
            class="text-#ffffff 
            hover:text-#EFC862"
            :class="{'!text-#EFC862': route.name == 'catc'}">About
          </router-link>
        </li>

        <li class="lg:pr-75px  p-10px  w-auto">
          <slot name="scope" :openval=open></slot>
          <router-link 
            to="/cat_supplies" 
            class="text-#ffffff 
            hover:text-#EFC862">Location
          </router-link>
        </li> 

        <li class=" p-10px  w-auto lg:mr-120px lg:w-30px ">
          <router-link 
            to="Login" 
            class=" text-#232526 hover:text-#ffffff bg-#EFC862 p-5px rounded-5px lg:p-10px">
            <!-- 判斷是否有token變換Login或Logout文字 -->
            <slot name="turnover" :key="open" ></slot> 
          </router-link>
        </li> 

        <li class="p-20px w-50px lg:p-0 lg:w-fit">
          <img src="../assets/cat/zoom_in_24px.png" alt="" class=" lg:w-full ">
        </li>

      </ul>
    </nav>
  </header>

</template>

<style>
  *{
    /* outline: 1px solid red; */
  }
</style>

