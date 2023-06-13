<script setup>

  import { RouterView } from 'vue-router'
  import catHeader from "../components/cat_header.vue";
  import cat_leftside from "../components/cat_leftside.vue";
  import cat_footer from "../components/cat_footer.vue";
  
</script>

<template>
  
  <!-- default_layout -->
  <div class="min-h-100vh w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-contain bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px),1fr)_311px] grid-cols-[1fr_1fr_1fr]
   lg:bg-auto lg:bg-center lg:grid lg:grid-rows-[105px_minmax(calc(100%-309px),1fr)_204px] lg:grid-cols-[163px_1fr]
  ">

    <cat_leftside></cat_leftside>
    
    <catHeader></catHeader>
    
    <RouterView />
  
    <cat_footer></cat_footer>

  </div>
  
</template>

