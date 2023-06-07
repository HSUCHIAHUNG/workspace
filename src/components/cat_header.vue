<script setup>
  import { onMounted, ref } from 'vue';

  /* header開關按紐 */
  const open = ref(true)
  const header = ref(null)

  const isOpen = () => {
    open.value = !open.value
    header.value.style.height = open.value ? '100vh' : '0vh';
    
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
      <nav ref="header" class=" h-0vh duration-500 overflow-hidden fixed top-0 right-0 left-0 m-auto bg-#232526 
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
            <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">News</li>
            <li class="p-20px w-50px lg:p-0 lg:w-fit">
              <img src="../assets/cat/zoom_in_24px.png" alt="" class=" lg:w-full ">
            </li>
        </ul>
      </nav>
    </header>

</template>

