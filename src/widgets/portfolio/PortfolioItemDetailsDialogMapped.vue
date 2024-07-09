<template>
  <DialogScrollContent
    class="max-w-[calc(100%-var(--container-padding))]
      sm:max-w-container-without-padding"
    @open-auto-focus.prevent
  >
    <template v-if="activeId">
      <DialogHeader class="gap-y-5">
        <DialogTitle class="font-normal text-2xl">{{ item.title }}</DialogTitle>
        <DialogDescription>
          <PortfolioItemDetails v-bind="item" />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter />
    </template>
    <div v-else>Nothing selected</div>
  </DialogScrollContent>
</template>

<script setup lang="ts">
  import { useStoreMap, useUnit } from 'effector-vue/composition';
  import {
    DialogScrollContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from '@/shared/ui/dialog';
  import { $$portfolio } from './portfolio.model';
  import PortfolioItemDetails from './PortfolioItemDetails.vue';

  const activeId = useUnit($$portfolio.$activeItemId);

  const item = useStoreMap({
    store: $$portfolio.$items,
    keys: () => activeId.value,
    fn: (items, itemId) => items.find(({ id }) => id === itemId)!,
  });
</script>

<style scoped></style>
