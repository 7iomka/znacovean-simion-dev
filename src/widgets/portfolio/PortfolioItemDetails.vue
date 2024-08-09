<template>
  <div data-id="portfolio-item-details">
    <div class="max-w-[900px]">
      <ThumbCarousel v-if="media.length > 1" :items="media" />
      <img
        v-else-if="media.length == 1"
        data-id="image"
        class="rounded-[inherit] object-cover"
        :src="media[0].src"
        width="640"
        height="360"
        alt=""
      />
      <div v-else class="aspect-h-9 aspect-w-16 rounded-md">
        <div
          data-id="image"
          class="flex flex-col items-center justify-center rounded-[inherit]
            bg-muted"
        >
          <svg
            class="h-[30%] fill-muted-foreground"
            width="64"
            height="55"
            viewBox="0 0 64 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.2304 14.4896L50.7509 0L0 8.91081L7.43795 51.2937L12.4748 50.4416V54.0831H64V14.4896H53.2304ZM12.4751 46.1793L10.8481 46.4886L4.80453 12.3194L47.3422 4.80302L49.0472 14.489H12.4751V46.1793ZM59.8165 49.8984H16.6587V18.6735H59.8165V49.8984ZM19.4478 21.4626V44.6292L28.2035 38.8186L33.6269 42.2272L46.7985 27.7382L48.5037 28.4352L57.0265 38.276V21.4626H19.4478ZM27.8157 31.4573C25.8018 31.4573 24.0969 29.753 24.0969 27.7382C24.0969 25.7236 25.8018 24.0184 27.8157 24.0184C29.8305 24.0184 31.5345 25.7227 31.5345 27.7382C31.5351 29.753 29.8305 31.4573 27.8157 31.4573Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-4">
      <PortfolioItemSkills :skills class="mt-5" />
      <div class="text-xs text-muted-foreground">
        {{ formatDate(startDate) }} - {{ formatDate(endDate) }}
      </div>
    </div>
    <article class="prose prose-invert">
      {{ description }}
    </article>
  </div>
</template>

<script setup lang="ts">
  import { formatDate } from '@/shared/lib/date';
  import type { PortfolioItem } from './portfolio.types.ts';
  import ThumbCarousel from './ui/ThumbCarousel.vue';
  import PortfolioItemSkills from './PortfolioItemSkills.vue';

  const props = defineProps<PortfolioItem>();
</script>

<style scoped></style>
