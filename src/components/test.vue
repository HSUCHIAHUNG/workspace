<template>
  <div class="min-h-[100vh] w-full bg-[url('/Bg.png')] bg-no-repeat object-cover bg-center grid grid-rows-[105px_minmax(calc(100vh-309px,1fr))_204px] grid-cols-[163px_1fr]">
    <!-- 左邊 -->
    <div class="w-[162px] h-screen row-start-1 row-end-4 col-start-1 col-end-2 p-[40px border-r border-solid border-[#1A1A1A]]">
      <p class="text-[41px] m-[40px] font-bold">CAT</p>
      <div class="h-[calc(100vh-161px)] flex items-end justify-center">
        <ul class="flex flex-col items-center justify-center gap-8">
          <li >
            <img src="/t.png" alt="">
          </li>
          <li>
            <img src="/IN.png" alt="">
          </li>
          <li>
            <img src="/f.png" alt="">
          </li>
        </ul>
      </div>
    </div>

    <!-- 上面Header -->
    <header class="row-start-1 row-end-2 col-start-2 col-end-3">
      <nav class=" w-full flex flex-row-reverse items-center p-[40px]">
        <ul class="flex items-center gap-5">
          <li>Home</li>
          <li>Article</li>
          <li>About</li>
          <li>Location</li> 
          <li>News</li>
          <li><img src="/zoom_in_24px.png" alt="" class="w-full"></li>
        </ul>
      </nav>
    </header>

    <!-- 主要內容 -->
    <main class="flex justify-center row-start-2 row-end-3 col-start-2 col-end-3 p-[20px] h-fit mt-[120px]">
      <div class="w-1/2 flex flex-col gap-4">
        <p class="before:content-[''] before:block before:absolute  before:bottom-0  before:h-[1px]  before:w-[50%]  before:left-0  before:right-0 before:bg-[#A1A1A1]  relative after:content-[''] after:block after:absolute  after:bottom-0  after:h-[1px]  after:w-[25%]  after:left-0  after:right-0 after:bg-[#EFC862]">/ 01</p>
        <p>About Cat</p>
        
        <p  class="text-[#A1A1A1]">Senses</p>
        <p  class="text-[#A1A1A1]">Behavior</p>
      </div>

      <div class="w-[400px] text-[72px]">
        <p class="leading-[72px]">
          EAT
          Everyday
        </p>
        <p class="text-[21px]">
          The cat is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.
        </p>
      </div>
    </main>

    <footer class="flex row-start-3 row-end-4 col-start-2 col-end-3 backdrop-blur-[20px] bg-black/5">
      <div class="w-full flex flex-col justify-center p-[24px]">
        <p>EVENT</p>
        <p  class="text-[#A1A1A1]">Cat’s Foods @Anythings About Cat Club </p>
        <p>SF - Sat,July 14 / 15-17PM </p>

      </div>
      <div class="w-full flex ">
        
        <img src="/Left.png" alt="" class="h-full object-cover">
        
        <div class="w-full flex flex-col justify-center p-[24px] gap-[10px]">
          <p>NEWS</p>
          <p class="text-[#A1A1A1]">The average lifespan of pet cats has risen in recent decades.</p>
          <p class="text-[#EFC862]">Read more</p>
        </div>
      </div>
    </footer>
  </div>
</template>