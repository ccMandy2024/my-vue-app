<!-- src/App.vue -->
<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>
  <div id="app">
    <UserInfo />
  </div>
</template>

<script lang="ts">
import UserInfo from "@/components/UserInfo.vue";

export default {
  components: {
    UserInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
