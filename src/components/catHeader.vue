<script setup>

</script>

<template>

    <header ref="header" class="w-full h-0% overflow-auto duration-500 fixed z-10 bg-#232526 
        lg:block lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4 lg:w-auto lg:h-auto lg:static">
        <nav class=" lg:w-90% lg:flex lg:flex-row-reverse lg:items-center lg:p-40px">
          <ul class="flex flex-col items-center  text-white font-bold
          lg:flex lg:flex-row lg:items-center" >
            <!-- 關閉選單按鈕 -->
            <li class="w-50px self-end lg:hidden">
              <img @click = isOpen src="../assets/cat/close.svg"  class=" p-15px " alt="">
            </li>
              <li class="   lg:pr-55px  p-10px text-#EFC862  w-50px">
                <router-link to="/cata" class="text-#EFC862">Home</router-link>
              </li>
              <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
                <router-link to="/catb" class="text-#ffffff">Article</router-link>
              </li>
              <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
                <router-link to="/catc" class="text-#ffffff">About</router-link>
              </li>
              <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">
                <router-link to="/about" class="text-#ffffff">Location</router-link>
              </li> 
              <li class="   lg:pr-55px  p-10px hover:text-#EFC862 w-50px">News</li>
              <li class="p-20px w-50px lg:p-0 lg:w-fit">
                <img src="../assets/cat/zoom_in_24px.png" alt="" class=" lg:w-full ">
              </li>
          </ul>
        </nav>
    </header>

</template>

