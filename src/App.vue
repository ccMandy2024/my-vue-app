<template>
  <div id="app">
    <!-- 頂部導航或其他全局組件可以放在這裡 -->
    <router-view />
    <!-- 這裡將顯示由 vue-router 定義的頁面內容 -->
  </div>
</template>

<script setup lang="ts"></script>

<style>
/* 添加全局樣式 */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
