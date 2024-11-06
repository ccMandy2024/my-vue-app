<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>
  <div class="m-52">
    <Slider :default-value="[60]" :max="100" :step="1" />
  </div>
</template>
