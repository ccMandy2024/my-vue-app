<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Circle } from "lucide-vue-next";
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'aspect-square h-5 w-5 rounded-full border border-text-secondary text-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <Circle class="h-2.5 w-2.5 fill-current text-current" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
