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
</script>

<template>
  <router-link to="/">回到首頁</router-link>
  <div class="m-10">
    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple"> Apple </SelectItem>
          <SelectItem value="banana"> Banana </SelectItem>
          <SelectItem value="blueberry"> Blueberry </SelectItem>
          <SelectItem value="grapes"> Grapes </SelectItem>
          <SelectItem value="pineapple"> Pineapple </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
