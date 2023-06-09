<script setup>
import { ref } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
import index from './view/cat_supplies/index.vue'
const id_props = ref('')

const change = (e) =>{
  // console.log(e);
  id_props.value = e
}

const openval = (e) => {
  console.log(e);
}


</script>

<template>
  <RouterView :msg="id_props" @change="change"  @openval="openval"/>

  

</template>

<style>
  *{
    text-decoration: none;
    /* outline: 1px solid red; */
  }


</style>

