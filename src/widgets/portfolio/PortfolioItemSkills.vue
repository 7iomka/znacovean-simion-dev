<template>
  <ul
    data-id="skills"
    :class="
      cn('flex flex-wrap gap-1 items-center text-xl leading-[0]', props.class)
    "
  >
    <li v-for="item in skills" :key="item">
      <Tooltip>
        <TooltipTrigger>
          <span :class="skillsetIconsMap[item].iconClass"></span>
        </TooltipTrigger>
        <TooltipContent>{{ skillsetIconsMap[item].name }}</TooltipContent>
      </Tooltip>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { cn } from '@/shared/lib/cn';
  import { type Skill, skillsetIconsMap } from '@/shared/lib/icon-mapping';
  import { Tooltip, TooltipTrigger, TooltipContent } from '@/shared/ui/tooltip';
  import { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
    skills: Skill[];
  }>();
</script>

<style scoped></style>
