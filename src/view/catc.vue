<script setup>
import { onMounted, ref } from 'vue';
import { FETCH_UPLOADFILE } from '@/service3';
import { setupUserAuthStore } from "../stores/index"
import { storeToRefs } from 'pinia';

  const upload_path = ref('')
  const modelFormVal = ref({})
  
  // images api url
  const __BASE_URL__ = ref('http://taitungttgo.cbsdinfo.com.tw');
  const __IMG_URL_PATTERN__ = ref('/service/Upfile/');

  async function preview_photo(e) {
    if (e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('files', file);
    upload_path.value = formData;
    const { error, data } = await FETCH_UPLOADFILE.Create(formData).catch((err) => console.error(err));
    if (error) return;
    modelFormVal.value.picture = `${data[0].filePath}`;
  }


</script>


<template>

  <!-- 主內容 -->
  <main class="row-start-2 row-end-3 col-start-1 col-end-4 p-40px h-fit 
    lg:flex lg:justify-center lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:p-20px lg:h-fit lg:mt-30px">

      <!-- 左 -->
      <div class="hidden lg:block lg:w-1/2 lg:flex lg:flex-col lg:text-left lg:gap-4">
        <p class=" lg:text-white lg:pb-10px lg:before:content-[''] lg:before:block lg:before:absolute  lg:before:bottom-0  lg:before:h-[1px]  lg:before:w-[50%]  lg:before:left-0  lg:before:right-0 lg:before:bg-[#A1A1A1]  lg:relative lg:after:content-[''] lg:after:block lg:after:absolute  after:bottom-0  lg:after:h-[1px]  lg:after:w-[25%]  lg:after:left-0  lg:after:right-0 lg:after:bg-[#EFC862]">/ 01</p>
        <p class="lg:text-white">About Cat</p>
        <p  class="lg:text-[#A1A1A1]">Senses</p>
        <p  class="lg:text-[#A1A1A1]">Behavior</p>
      </div>

      <!-- 右 -->
      <div class="w-295px text-36px lg:w-[400px] lg:text-[72px]">
        <p class=" w-295px h-100px leading-50px text-left pb-24px text-white font-bold
          lg:leading-[72px] lg:text-left lg:pb-20px lg:text-white lg:w-auto lg:h-auto ">
          EC<br>
          Everyday
        </p>
        <p class="text-11px text-left text-white font-normal leading-30px
          lg:text-[21px] lg:text-white ">
          The cat is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.
        </p>
        <button class="block p-x-40px p-y-10px m-t-15px bg-#EFC862 border-none  rounded-2 font-bold cursor-pointer hover:text-white">相簿 / 上傳</button>
      </div>

      <!-- 照片上傳燈箱 -->
      <div class="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 h-full w-full bg-black/40">
        <div class="max-h-90vh w-90% relative overflow-hidden md:w-600px rounded-10px  bg-white  border-1 border-red-500 border-solid ">
          <div class="sticky bg-#EFC862 p-15px text-#ffffff font-bold ">我的相簿</div>
          <form @submit.prevent="onSubmit" class="flex  p-10px ">
            <label for="upload_input" class="block p-x-20px p-y-10px rounded-1 border-1 border-solid border-blue-400 font-bold cursor-pointer hover:bg-blue-400 hover:text-white">上傳 / 預覽</label>
            <input @change="preview_photo" type="file" name="files" id="upload_input" class="hidden" >
            <button @click="upload_photo" class="block box-border p-x-20px p-y-10px m-l-20px rounded-1 w-auto  border-1 border-solid border-blue-400 bg-blue-300 text-white text-16px font-bold cursor-pointer hover:bg-blue-400">確定上傳</button>
          </form>

          <!-- 預覽圖片 -->
          <div class="p-10px ">
            <img v-if="modelFormVal.picture" :src="`${__BASE_URL__}${__IMG_URL_PATTERN__}${modelFormVal.picture}`" alt="" class="max-w-300px object-content ">
          </div>
        </div> 
      </div>

  </main>
    
</template>

<style>
  *{
    /* outline: 1px solid red; */
  }
</style>