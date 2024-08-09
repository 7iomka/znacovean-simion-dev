<template>
  <Card
    data-id="portfolio-item"
    class="rounded-md flex flex-col hover:bg-border/30 transition-colors
      duration-300"
  >
    <CardHeader
      class="flex flex-col items-start gap-3 p-0 rounded-[inherit]
        rounded-b-none -mx-px -mt-px cursor-pointer overflow-hidden group"
      role="button"
      @click="handleOpenDetails"
    >
      <ThumbCarousel :items="media" slide-on-main-hover dot-as-thumbnail />
    </CardHeader>
    <CardContent class="p-6 flex-grow">
      <CardTitle
        data-id="title"
        class="text-lg font-normal leading-none tracking-tight"
      >
        {{ title }}
      </CardTitle>
      <article data-id="excerpt" class="text-sm text-muted-foreground mt-3">
        {{ excerpt }}
      </article>
      <PortfolioItemSkills :skills class="mt-5" />
    </CardContent>
    <CardFooter class="gap-4 justify-between">
      <div class="text-xs text-muted-foreground">
        {{ formatDate(startDate) }} - {{ formatDate(endDate) }}
      </div>
      <Button
        class="pr-[0.75rem] min-w-[100px] font-bold"
        @click="handleOpenDetails"
        >Details <span class="icon-[uil--angle-right-b] text-[1.3em]"></span>
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
  import { formatDate } from '@/shared/lib/date';
  import { Button } from '@/shared/ui/button';
  import type { PortfolioItem } from './portfolio.types';
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/shared/ui/card';
  import PortfolioItemSkills from './PortfolioItemSkills.vue';
  import ThumbCarousel from './ui/ThumbCarousel.vue';

  const props = defineProps<PortfolioItem>();

  const emit = defineEmits<{
    open: [id: string];
  }>();

  const handleOpenDetails = () => {
    emit('open', props.id);
  };
</script>

<style scoped></style>
