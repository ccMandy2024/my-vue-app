<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  SwitchRootProps & {
    class?: HTMLAttributes["class"];
    variant?: "" | "aaa";
    status?: "" | "checked";
  }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-10 w-[53px] shrink-0 cursor-pointer items-center rounded-full border-3 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-text-secondary',
        { 'mx-10': props.variant === 'aaa' },
        { 'data-[state=checked]:bg-primary': props.status === 'checked' },
        props.class
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'pointer-events-none h-7 w-7 rounded-full bg-bg-primary shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-[3px]',
          { 'data-[state=checked]:translate-x-11': props.status === 'checked' },
          props.class
        )
      "
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
