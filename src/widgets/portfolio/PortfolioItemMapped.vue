<template>
  <PortfolioItem v-bind="item" @open="handleOpenDialog" />
</template>

<script setup lang="ts">
  import { useStoreMap, useUnit } from 'effector-vue/composition';
  import { $$portfolio } from './portfolio.model';
  import PortfolioItem from './PortfolioItem.vue';

  const props = defineProps<{ id: string }>();

  const item = useStoreMap({
    store: $$portfolio.$items,
    keys: () => props.id,
    fn: (items, itemId) => items.find(({ id }) => id === itemId)!,
  });

  const handleOpenDialog = useUnit($$portfolio.openDialogActionClicked);
</script>
