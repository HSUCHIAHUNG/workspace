<script setup>
import { onMounted, ref } from 'vue';
const open = ref(true)

const isOpen = () => {
  open.value = !open.value
  console.log(open.value);
}




onMounted(() => {
  // console.log('open');
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
       <img @click = isOpen src="./assets/cat/Vector.png" 
        class="lg:hidden" alt="">
      </div>
      <div class=" hidden 
      lg:block lg:h-[calc(100vh-161px)] lg:flex lg:items-end lg:justify-center">
        <ul class=" 
        lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-8">
          <li>
            <img src="./assets/cat/t.png" alt="">
          </li>
          <li>
            <img src="./assets/cat/IN.png" alt="">
          </li>
          <li>
            <img src="./assets/cat/f.png" alt="">
          </li>
        </ul>
      </div>
    </div>

      <!-- Header -->
      <header class=" hidden
      lg:block lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4">
        <nav class=" lg:w-90% lg:flex lg:flex-row-reverse lg:items-center lg:p-40px">
          <ul class="lg:flex lg:items-center" >
            <li class="lg:text-white lg:pr-55px">Home</li>
            <li class="lg:text-white lg:pr-55px">Article</li>
            <li class="lg:text-white lg:pr-55px ">About</li>
            <li class="lg:text-white lg:pr-55px">Location</li> 
            <li class="lg:text-white lg:pr-55px">News</li>
            <li><img src="./assets/cat/zoom_in_24px.png" alt="" class="lg:w-full "></li>
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
          <img src="./assets/cat/Left.png" alt="" class="w-80px  h-53.25px lg:w-60% lg:h-full lg:object-cover">
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
  





