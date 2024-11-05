<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <router-link to="/">回到首頁</router-link>
  <Slider :default-value="[33]" :max="100" :step="1" />
</template>
