<script setup>
import catHeader from "../components/catHeader.vue";
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
  <div class="min-h-[100vh] w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-contain bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px,1fr))_311px] grid-cols-[1fr_1fr_1fr]
  lg:min-h-[100vh] lg:bg-no-repeat lg:bg-auto lg:object-cover lg:bg-center lg:grid lg:grid-rows-[105px_minmax(calc(100vh-309px,1fr))_204px] lg:grid-cols-[163px_1fr]
  ">
    <!-- 左邊 -->
    <div class=" h100% row-start-1 row-end-2 col-start-1 col-end-4
    lg:h-screen lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:border-r lg:border-solid lg:border-#707070">
      <p class="text-white text-41px  m-t-8px m-l-24px text-left font-bold leading-61px
       lg:text-white lg:text-41px  lg:m-40px lg:font-bold lg:leading-none">CAT</p>
      <div class="absolute right-26px top-30px">
      <!-- 開起選單按鈕 -->
        <img @click = isOpen src="../assets/cat/Vector.png" class="lg:hidden p-t-10px" alt="">
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
      <header ref="header" class="w-full h-0% overflow-auto duration-500 fixed z-10 
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
      

      <!-- 主內容 -->
      <main class="row-start-2 row-end-3 col-start-1 col-end-4 p-40px h-fit 
        lg:flex lg:justify-center lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:p-20px lg:h-fit lg:mt-30px">
          <div class="hidden
            lg:block lg:w-1/2 lg:flex lg:flex-col lg:text-left lg:gap-4">
            <p class=" lg:text-white lg:pb-10px lg:before:content-[''] lg:before:block lg:before:absolute  lg:before:bottom-0  lg:before:h-[1px]  lg:before:w-[50%]  lg:before:left-0  lg:before:right-0 lg:before:bg-[#A1A1A1]  lg:relative lg:after:content-[''] lg:after:block lg:after:absolute  after:bottom-0  lg:after:h-[1px]  lg:after:w-[25%]  lg:after:left-0  lg:after:right-0 lg:after:bg-[#EFC862]">/ 01</p>
            <p class="lg:text-white">About Cat</p>
            <p  class="lg:text-[#A1A1A1]">Senses</p>
            <p  class="lg:text-[#A1A1A1]">Behavior</p>
          </div>
    
          <div class="w-295px text-36px lg:w-[400px] lg:text-[72px]">
            <p class=" w-295px h-100px leading-50px text-left pb-24px text-white font-bold
            lg:leading-[72px] lg:text-left lg:pb-20px lg:text-white lg:w-auto lg:h-auto ">
              EAT<br>
              Everyday
            </p>
            <p class="text-11px text-left text-white leading-15px font-normal
            lg:text-[21px] text-left lg:text-white leading-30px">
              The cat is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.
            </p>
          </div>
      </main>
      
      <footer class="h-100% lg:flex lg:self-end row-start-3 row-end-4 col-start-1 col-end-4 backdrop-blur-[20px] bg-black/50 p-24px
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
    margin: 0;
    padding: 0;
  }
}

</style>