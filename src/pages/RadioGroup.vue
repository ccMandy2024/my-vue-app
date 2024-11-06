<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>

  <div class="m-10">
    <!-- 預設樣式的 Radio Group -->
    <RadioGroup default-value="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r1" value="default" />
        <Label for="r1">Default</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r2" value="comfortable" />
        <Label for="r2">Comfortable</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem id="r3" value="compact" />
        <Label for="r3">Compact</Label>
      </div>
    </RadioGroup>
  </div>

  <div class="m-10">
    <!-- 使用自定義樣式的 Radio Group -->
    <RadioGroupRoot gap="4" class="custom-radio-group">
      <div class="flex items-center space-x-2">
        <CustomRadioGroupItem
          id="o1"
          value="option1"
          size="small"
          borderColor="red"
        />
        <Label for="o1">Option 1</Label>
      </div>
      <div class="flex items-center space-x-2">
        <CustomRadioGroupItem
          id="o2"
          value="option2"
          size="medium"
          borderColor="green"
        />
        <Label for="o2">Option 2</Label>
      </div>
      <div class="flex items-center space-x-2">
        <CustomRadioGroupItem
          id="o3"
          value="option3"
          size="large"
          borderColor="blue"
        />
        <Label for="o3">Option 3</Label>
      </div>
    </RadioGroupRoot>
  </div>
</template>
