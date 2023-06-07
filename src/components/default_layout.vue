<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import catHeader from "./cat_header.vue";
import cat_leftside from "./cat_leftside.vue";
import cat_footer from "./cat_footer.vue";



const count = ref(0)
</script>

<template>

  <div class="min-h-100vh w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-contain bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px),1fr)_311px] grid-cols-[1fr_1fr_1fr]
   lg:bg-auto lg:bg-center lg:grid lg:grid-rows-[105px_minmax(calc(100%-309px),1fr)_204px] lg:grid-cols-[163px_1fr]
  ">
    <!-- left -->
    <cat_leftside></cat_leftside>

    <!-- header -->
    <catHeader></catHeader>

    <RouterView/>

    <!-- footer -->
    <cat_footer></cat_footer>

  </div>
  
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
