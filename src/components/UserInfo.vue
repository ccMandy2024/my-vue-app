<!-- src/components/UserInfo.vue -->
<template>
  <div>
    <h2>User Information</h2>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

// 定義 User 資料的接口
interface User {
  name: string;
  age: number;
  email: string;
}

export default defineComponent({
  name: "UserInfo",
  setup() {
    const user = ref<User | null>(null);

    // 在組件掛載時調用 API 並獲取數據
    onMounted(async () => {
      const response = await fetch("/api/user");
      const result = await response.json();
      if (result.code === 200) {
        user.value = result.data;
      }
    });

    return {
      user,
    };
  },
});
</script>

<style scoped>
h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}
</style>
