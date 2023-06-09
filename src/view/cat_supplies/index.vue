<script setup>
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from 'vue-router'
    const emit = defineEmits(['change'])
    const id_props = defineProps({
        msg: ''
    })

    const idx = ref('')
    
    const goToCourses = () => {
        const timestamp = Date.now();
        idx.value = timestamp;
        emit('change', idx.value)
        console.log(idx.value);
    };

    

   

</script>

<template>
  
   
    <div class="p-50px text-center">

        <!-- <router-link 
        to="/def_layout/cata"
        class="text-black bg-red-300 m-10px p-5px">backhome
        </router-link> -->

        <router-link 
            :to="`/cat_supplies/${idx}`" 
            @click.prevent="goToCourses" 
            class="text-black bg-red-300 m-10px p-5px">item1
        </router-link>

        <router-link 
            :to="`/cat_supplies/${idx}`" 
            @click.prevent="goToCourses" 
            class="text-black bg-blue-300 m-10px p-5px">item2
        </router-link>

        <router-link 
            :to="`/cat_supplies/${idx}`" 
            @click.prevent="goToCourses" 
            class="text-black bg-yellow-300 m-10px p-5px">item3
        </router-link>

    </div>
    

</template>

<style>


</style>

