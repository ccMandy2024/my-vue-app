<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>

  <div class="m-10 justify-items-center">
    <div class="m-4">發布</div>
    <div class="flex items-center space-x-2">
      <Switch variant="aaa" status="checked" />
    </div>
  </div>
</template>
