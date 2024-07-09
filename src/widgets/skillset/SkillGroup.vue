<template>
  <div data-id="skill-group">
    <Separator class="my-0 w-16" />
    <h2
      class="text-2xl flex items-center gap-3 p-4 pr-0 border-l border-l-border"
    >
      <span :class="['icon-bg', iconClass, 'text-[1.3em]']"></span>
      <span>{{ name }}</span>
    </h2>
    <Separator class="my-0 w-16" />
    <div data-id="skills" class="flex flex-wrap gap-4 mt-4">
      <div
        v-for="(item, index) in skills"
        :key="index"
        data-id="skill"
        class="flex items-center gap-2 text-sm"
      >
        <span
          :class="[skillsetIconsMap[item]?.iconClass, 'text-[1.2em]']"
        ></span>
        <span>{{ skillsetIconsMap[item]?.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { skillsetIconsMap } from '@/shared/lib/icon-mapping';
  import type { SkillGroup } from './skillset.types';
  import Separator from '@/shared/ui/separator/Separator.vue';

  defineProps<SkillGroup>();
</script>
