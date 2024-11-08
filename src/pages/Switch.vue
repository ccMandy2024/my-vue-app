<script setup lang="ts">
import { ref, reactive } from "vue";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const isOpen = ref(false);
const formData = reactive({
  name: "Pedro Duarte",
  username: "@peduarte",
});

// 方法
const setIsOpen = (value) => {
  isOpen.value = value;
};

const handleSwitchChange = (checked) => {
  isOpen.value = checked;
};

const handleSubmit = () => {
  // 處理表單提交邏輯
  console.log("Form submitted:", formData);
  isOpen.value = true;
};
</script>

<template>
  <div class="m-10"><router-link to="/">回到首頁</router-link></div>

  <div class="m-10 justify-items-center">
    <div class="m-4">發布</div>
    <div class="flex items-center space-x-2 m-4">
      <Switch variant="aaa" status="checked" />
    </div>
    <div class="flex items-center space-x-2 m-4">
      <Switch variant="aaa" status="checked" disabled />
    </div>
    <div class="flex items-center space-x-2 m-4">
      <Dialog>
        <DialogTrigger as-child>
          <Switch variant="aaa" status="checked" />
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right"> Username </Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <div class="flex items-center space-x-2 m-4">
      <Switch
        :checked="isOpen"
        @update:checked="handleSwitchChange"
        status="checked"
      />

      <Dialog :open="isOpen" @update:open="setIsOpen">
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>發布</DialogTitle>
          </DialogHeader>

          <div class="grid gap-4 py-4 m-auto">
            確定要發布此通知嗎？發布後無法收回
          </div>

          <DialogFooter>
            <Button type="submit" @click="handleSubmit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
