<script setup lang="ts">

const props = defineProps({
  headerText:{
    type:String,
    default:"Dashboard"
  },
  subtitleText:{
    type:String,
    default:"Dashboard"
  }
})

</script>

<template>
    <header class="bg-white px-6 pt-10 pb-6">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="flex flex-col items-start">
          <h1 class="text-xl font-bold ">{{headerText}}</h1>
          <p class="text-gray-600 ">{{ subtitleText }}</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center bg-white shadow-md rounded-full p-2 cursor-pointer ">
            <a href="#">
              <img src="/image/bell.svg" alt="notifikasi">
            </a>
          </div>
        </div>
      </div>
    </header>
</template>
