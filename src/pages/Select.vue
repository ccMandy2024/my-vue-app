<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>
  <div class="flex m-20 gap-5">
    <div class="flex items-center gap-[10px]">
      <div>會員方案：</div>
      <Select>
        <SelectTrigger class="w-[250px] h-[40px]">
          <SelectValue placeholder="請選擇方案" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="fruit in fruits" :key="fruit" :value="fruit">
              {{ fruit }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="flex items-center gap-[10px]">
      <div>所屬經銷商：</div>
      <Select>
        <SelectTrigger class="w-[250px] h-[40px]">
          <SelectValue placeholder="請選擇經銷商" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="zx in zxs" :key="zx" :value="zx">
              {{ zx }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fruits = ["免費方案", "基礎方案", "進階方案", "專業方案"];
const zxs = ["全屋記", "未來裝修圖說"];
</script>
