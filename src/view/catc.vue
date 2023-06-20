<script setup>
import { computed, onMounted, ref } from 'vue';
import { FETCH_UPLOADFILE } from '@/service3';

  // 預覽圖片使用
  const fileInput = ref(null);
  const previewImageUrls = ref();
  // 用來在圖片上傳前存放的容器
  const files_upload = ref([])
  // 發送圖片api返回的data容器(用來返回template使用)
  const modelFormVal = ref({})

  // 取得已上傳相片資料
  const GetList_parameter = ref({
    "page": 1,
    "limit": 10,
    "keyWord": "Alden"
  })
  const album_path = ref({})

  // 燈箱開關控制
  const open = ref(false)

  // images api url
  const __BASE_URL__ = ref('http://taitungttgo.cbsdinfo.com.tw');
  const __IMG_URL_PATTERN__ = ref('/service/Upfile/');

  
  // 上傳圖片api
  async function preview_photos(e) {
    if (files_upload.value.length === 0) return;

    const modifiedFiles = files_upload.value.map((file) => {
      const modifiedFileName = `Alden_${file.name}`;
      // new File可以接受3個參數fileBits(array代表文件的內容)，fileName，options(type) 
      return new File([file], modifiedFileName);
    });

    const formData = new FormData();
    modifiedFiles.forEach((file) => {
      // 'files' 是取陣列的名稱
      formData.append('files', file);
    });

    const { error, data } = await FETCH_UPLOADFILE.Create(formData).catch((err) =>
      console.error(err)
    );
    if (error) return;

    const filePaths = data.map((item) => item.filePath);
    modelFormVal.value.picture = filePaths;
    // console.log(modelFormVal);
  }

  // 預覽圖片
  const previewImages = (e) => {
    // 將圖片files先存進files_upload當中當用戶點擊確認後發送api
    const ready_upload_files = Array.from(e.target.files);
    files_upload.value = ready_upload_files;

    // 將img dom元素裡的files轉成blob格式後渲染到畫面上做預覽
    const files = fileInput.value.files;
    previewImageUrls.value = Array.from(files).map(file => URL.createObjectURL(file));
  };

  // 相簿渲染api發送
  onMounted (async () => {
    const { error, data,album_list } = await FETCH_UPLOADFILE.GetList(GetList_parameter.value)
      album_path.value = album_list;
  })

  // 控制相簿/上傳燈箱開關
  const is_upload_open = () => {
    open.value = !open.value
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
      <div class="w-295px h-400px text-36px bg-white rounded-3 lg:w-[500px] lg:text-[72px] overflow-auto ">
        <div class="sticky flex justify-between items-center text-22px  bg-#EFC862 p-15px text-#ffffff font-bold rounded-t-lg ">我的相片</div>
        <div  class="flex flex-wrap justify-around gap-4 p-10px">
          <img v-for="img_path in album_path" :key="img_path.filePath" :src="`${__BASE_URL__}${__IMG_URL_PATTERN__}${img_path.filePath}`" alt="" class="max-w-200px object-content rounded-2">
        </div>
        <button button @click="is_upload_open" class="block p-x-40px p-y-10px m-[15px_25px] bg-#EFC862 border-none  rounded-2 font-bold cursor-pointer hover:text-white">相簿 / 上傳</button>
      </div>


      <!-- 照片上傳燈箱 -->
      <div :class="{ '!flex': open, '!hidden': !open }" class="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 h-full w-full bg-black/40  !hidden z-10">
        <div class="max-h-90vh w-90% relative overflow-hidden md:w-600px rounded-10px  bg-white  border-1 ">
          <div class="sticky flex justify-between items-center text-22px  bg-#EFC862 p-15px text-#ffffff font-bold ">上傳相片
            <img @click = is_upload_open src="../assets/cat/close.svg"  class="  p-10px " alt="">
          </div>
          <form @submit.prevent="onSubmit" class="flex  p-10px ">
            <label for="upload_input" class="block p-x-20px p-y-10px rounded-1 border-1 border-solid border-blue-400 font-bold cursor-pointer hover:bg-blue-400 hover:text-white">上傳 / 預覽</label>
            <input  type="file" ref="fileInput" @change="previewImages" multiple name="files" id="upload_input" class="hidden" >
            <button @click="preview_photos" class="block box-border p-x-20px p-y-10px m-l-20px rounded-1 w-auto  border-1 border-solid border-blue-400 bg-blue-300 text-white text-16px font-bold cursor-pointer hover:bg-blue-400">確定上傳</button>
          </form>

          <!-- 預覽圖片 -->
          <div v-for="url in previewImageUrls" :key="url" class="p-10px">
            <img :src="url" alt="" class="max-w-300px object-content ">
          </div>
        </div> 
      </div>

  </main>

</template>

<style>

  *::-webkit-scrollbar{
    width: 0;
  }

</style>