<script setup>
import { computed } from "@vue/reactivity";
import { ref, reactive, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'

    const idx = ref('')
    const book = reactive([
        {id:1},
        {id:2},
        {id:3}
    ])

    onMounted (() => {
        idx.value = Date.now()
    })

</script>

<template>
    <!-- router動態id首頁 -->
    <div class="p-50px text-center" >

        <router-link 
            v-for="(item,index) in book"
            :key="item.id"
            :to="`/cat_supplies/${item.id}`" 
            class="text-black bg-red-300 m-10px p-5px"
            > item{{ item.id }}
        </router-link>

    </div>
    
</template>


