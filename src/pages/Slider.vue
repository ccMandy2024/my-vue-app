<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
// import { cn } from "@/lib/utils";
import { ref } from "vue";

const modelValue = ref([50]);
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>
  <div class="m-52 w-36">
    <Slider v-model="modelValue" :max="100" :step="10" />
  </div>
</template>
