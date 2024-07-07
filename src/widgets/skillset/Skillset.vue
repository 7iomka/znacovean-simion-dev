<template>
  <section id="skillset" class="py-10 bg-white/[0.03]">
    <div class="container">
      <h2 class="text-3xl lg:text-4xl">Skillset</h2>
      <div class="mt-8 lg:mt-10 pb-5">
        <div
          class="grid items-start justify-center gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          <SkillGroup
            v-for="{ name, iconClass, skills } in skillGroups"
            :key="name"
            :name
            :icon-class
            :skills
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useVModel } from 'effector-vue/composition';
  import SkillGroup from './SkillGroup.vue';
  import { $$skillset } from './skillset.model';

  const skillGroups = useVModel($$skillset.$skillGroups);
</script>

<style lang="scss" scoped></style>
