<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import catHeader from "../components/cat_header.vue";
import cat_leftside from "../components/cat_leftside.vue";
import cat_footer from "../components/cat_footer.vue";

const count = ref(0)
const pnav_val = ref()

const enav_val = (e) => {
  // console.log(e);
  pnav_val.value = e;
  // console.log(pnav_val.value);
}


</script>

<template>

  <div class="min-h-100vh w-full bg-#232526 bg-[url(src/assets/cat/Bg.png)] bg-no-repeat bg-contain bg-center grid  grid-rows-[77px_minmax(calc(100vh-388px),1fr)_311px] grid-cols-[1fr_1fr_1fr]
   lg:bg-auto lg:bg-center lg:grid lg:grid-rows-[105px_minmax(calc(100%-309px),1fr)_204px] lg:grid-cols-[163px_1fr]
  ">
  
    <!-- left -->
    <cat_leftside></cat_leftside>

    <!-- header -->
    <catHeader :pnav_val="pnav_val" @enav_val="enav_val"></catHeader>
    
    <RouterView />

    <!-- footer -->
    <cat_footer></cat_footer>

  </div>
  
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
