<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <router-link to="/">回到首頁</router-link>
  <div class="m-10">
    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
    </div>
  </div>
</template>
