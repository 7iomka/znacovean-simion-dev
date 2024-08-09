<template>
  <section id="portfolio" class="py-10">
    <div class="container">
      <h2 class="text-3xl lg:text-4xl">Portfolio</h2>
      <div class="mt-8 lg:mt-10">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4
            lg:gap-x-8 gap-y-16"
        >
          <PortfolioItemMapped
            v-for="item in items"
            :id="item.id"
            :key="item.id"
          />
        </div>
        <PortfolioItemDetailsDialogMapped />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useVModel } from 'effector-vue/composition';
  import { $$portfolio } from './portfolio.model';
  import PortfolioItemMapped from './PortfolioItemMapped.vue';
  import PortfolioItemDetailsDialogMapped from './PortfolioItemDetailsDialogMapped.vue';

  const items = useVModel($$portfolio.$items);
</script>

<style scoped></style>
