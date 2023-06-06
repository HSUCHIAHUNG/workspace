<script setup>
import catHeader from "../components/catHeader.vue";
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

/* header開關按紐 */
const open = ref(true)
const header = ref(null)

const isOpen = () => {
  open.value = !open.value
   header.value.style.height = open.value ? '100%' : '0%';
  
}




onMounted(() => {
  
})




  // bg-[url(src/assets/cat/Bg.png)]


</script>


<template>
  <div class="min-h-[100vh] w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-[length:70%_50%] object-cover bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px,1fr))_311px] grid-cols-[1fr_1fr_1fr]
  lg:min-h-[100vh] lg:w-full lg:bg-[url(src/assets/cat/Bg.png)]  lg:bg-#232526 lg:bg-no-repeat lg:bg-[length:70%_100%] lg:object-cover lg:bg-right lg:grid lg:grid-rows-[105px_minmax(calc(100vh-309px,1fr))_204px] lg:grid-cols-[163px_1fr]
  ">
    <!-- 左邊 -->
    <div class=" h100% row-start-1 row-end-2 col-start-1 col-end-4
    lg:h-screen lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:border-r lg:border-solid lg:border-#707070">
      <p class="text-white text-41px  m-t-8px m-l-24px text-left font-bold leading-61px
       lg:text-white lg:text-41px  lg:m-40px lg:font-bold lg:leading-none">CAT</p>
      <div class="absolute right-26px top-30px">
      <!-- 開起選單按鈕 -->
        <img @click = isOpen src="../assets/cat/Vector.png" class="lg:hidden" alt="">
      </div>
      <div class=" hidden 
      lg:block lg:h-[calc(100vh-161px)] lg:flex lg:items-end lg:justify-center">
        <ul class=" 
        lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-8">
          <li>
            <img src="../assets/cat/t.png" alt="">
          </li>
          <li>
            <img src="../assets/cat/IN.png" alt="">
          </li>
          <li>
            <img src="../assets/cat/f.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!-- w-0% h-100vh overflow-auto duration-500 fixed z-10 bg-#232526  -->
      <!-- Header -->
      <catHeader></catHeader>
      

      <!-- 主內容 -->
      
      
      <footer class="h-80% lg:flex lg:self-end row-start-3 row-end-4 col-start-1 col-end-4 backdrop-blur-[20px] bg-black/50 p-24px
        lg:h-100% lg:flex lg:self-end lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:backdrop-blur-[20px] lg:bg-black/50 lg:h-80% lg:p-0
      ">
        <div class="w-100% flex flex-col justify-center items-start  gap-2
            lg:w-45% lg:flex lg:flex-col lg:justify-center lg:items-start lg:p-[24px] lg:gap-2">
          <p class="text-white">EVENT</p>
          <p  class="text-[#A1A1A1] p-t20px">Cat’s Foods @Anythings About Cat Club </p>
          <p class="text-white">SF - Sat,July 14 / 15-17PM </p>
          <div class="w-50px h-6px flex flex-row items-start gap-10px p-b-24px p-t-16px">
              <div class="w-10px h-10px rounded-full bg-#EFC862"></div>
              <div class="w-10px h-10px rounded-full bg-#A1A1A1"></div>
              <div class="w-10px h-10px rounded-full bg-#A1A1A1"></div>
          </div>
        </div>
        <div class="w-100%  flex flex-row-reverse justify-end lg:flex-row lg:w-60% lg:flex ">
          <img src="../assets/cat/Left.png" alt="" class="w-30% lg:w-60% lg:h-full lg:object-cover">
          <div class="w-full flex flex-col justify-center text-left p-t-10px  gap-15px
            lg:w-40% lg:flex lg:flex-col lg:justify-center lg:text-left lg:p-25px lg:gap-[15px]">
            <p class="text-white">NEWS</p>
            <p class="text-[#A1A1A1]">The average lifespan of pet cats has risen in recent decades.</p>
            <p class="text-[#EFC862]">Read more</p>
          </div>
        </div>
    </footer>
  </div>
 
</template>


<style>
  *{
    /* outline: 1px solid red; */
  }

  

  @media screen and (max-width: 1024px) {
    #app{
    padding: 0;
  }
}

</style>