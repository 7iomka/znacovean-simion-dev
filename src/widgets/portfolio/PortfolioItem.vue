<template>
  <Card
    data-id="portfolio-item"
    class="rounded-md flex flex-col hover:bg-border/30 transition-colors
      duration-300"
  >
    <DialogTrigger as-child>
      <CardHeader
        class="flex flex-col items-start gap-3 p-0 rounded-[inherit]
          rounded-b-none -mx-px -mt-px cursor-pointer overflow-hidden group"
        role="button"
        @click="handleOpenDetails"
      >
        <div
          class="w-full aspect-w-16 aspect-h-9 rounded-[inherit]
            group-hover:scale-105 transition-transform duration-300"
        >
          <img
            v-if="thubmnail"
            data-id="image"
            class="object-cover rounded-[inherit]"
            :src="thubmnail"
            width="640"
            height="360"
            alt=""
          />
          <div
            v-else
            data-id="image"
            class="bg-muted flex flex-col items-center justify-center
              rounded-[inherit]"
          >
            <svg
              class="fill-muted-foreground h-[30%]"
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
      </CardHeader>
    </DialogTrigger>
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
      <DialogTrigger as-child>
        <Button
          class="pr-[0.75rem] min-w-[100px] font-bold"
          @click="handleOpenDetails"
          >Details <span class="icon-[uil--angle-right-b] text-[1.3em]"></span>
        </Button>
      </DialogTrigger>
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
  import { DialogTrigger } from '@/shared/ui/dialog';
  import PortfolioItemSkills from './PortfolioItemSkills.vue';

  const props = defineProps<PortfolioItem>();

  const emit = defineEmits<{
    open: [id: string];
  }>();

  const handleOpenDetails = () => {
    emit('open', props.id);
  };
</script>

<style scoped></style>
