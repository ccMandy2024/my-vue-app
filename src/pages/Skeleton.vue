<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>

  <div class="m-5">
    <div v-if="isLoading" class="flex items-center space-x-4">
      <!-- 骨架屏 -->
      <Skeleton class="h-12 w-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton class="h-[20px] w-[250px]" />
        <Skeleton class="h-[20px] w-[200px]" />
      </div>
      <div class="flex flex-col space-y-3">
        <Skeleton class="h-[125px] w-[250px] rounded-xl" />
        <div class="space-y-2">
          <Skeleton class="h-[20px] w-[250px]" />
          <Skeleton class="h-[20px] w-[200px]" />
        </div>
      </div>
    </div>

    <div v-else>
      <!-- 內容 -->
      <div class="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/48"
          class="h-12 w-12 rounded-full"
          alt="User avatar"
        />
        <div class="space-y-2">
          <p class="h-[20px] w-[250px] bg-gray-300 rounded-md">內容標題</p>
          <p class="h-[20px] w-[200px] bg-gray-300 rounded-md">內容副標題</p>
        </div>
        <div class="flex flex-col space-y-3">
          <img
            src="@/assets/images/01.jpg"
            class="h-[125px] w-[250px] rounded-xl"
            alt="Main content"
          />
          <div class="space-y-2">
            <p class="h-[20px] w-[250px] bg-gray-200 rounded-md">內容行1</p>
            <p class="h-[20px] w-[200px] bg-gray-300 rounded-md">內容行2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Skeleton } from "@/components/ui/skeleton";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>
