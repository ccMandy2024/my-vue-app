<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>

  <div class="m-20 gap-3 justify-items-center">
    <div class="m-5">是否分期</div>
    <RadioGroup default-value="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r1" value="default" />
        <Label for="r1">是</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label for="r2">否</Label>
      </div>
    </RadioGroup>
  </div>
</template>
