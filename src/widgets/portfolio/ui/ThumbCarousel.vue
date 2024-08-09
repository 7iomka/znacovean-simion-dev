<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { watchOnce } from '@vueuse/core';
  import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/shared/ui/carousel';

  import { booleanDataAttr } from '@/shared/lib/attrs';

  interface ThumbCarouselProps {
    items: { src: string; thumbSrc?: string; alt?: string }[];
    slideOnMainHover?: boolean;
    dotAsThumbnail?: boolean;
  }

  const props = defineProps<ThumbCarouselProps>();

  const emblaMainApi = ref<CarouselApi>();
  const emblaThumbnailApi = ref<CarouselApi>();
  const selectedIndex = ref(0);
  const isMoving = ref(false);

  const isEmpty = computed(() => props.items.length === 0);

  function onSelect() {
    if (!emblaMainApi.value) return;
    selectedIndex.value = emblaMainApi.value!.selectedScrollSnap();
    emblaThumbnailApi.value?.scrollTo(emblaMainApi.value!.selectedScrollSnap());
  }

  function onThumbClick(index: number) {
    if (!emblaMainApi.value) return;
    emblaMainApi.value!.scrollTo(index, true);
  }

  function handleMainMouseMove(e: MouseEvent) {
    if (!props.slideOnMainHover) return;

    isMoving.value = true;
    if (!emblaMainApi.value) return;
    const offsetX = e.offsetX;
    const width = (e.target as HTMLElement)?.offsetWidth || 0;
    const percent = offsetX / width;

    const targetIndex = Math.min(
      Math.floor(percent * props.items.length),
      props.items.length - 1,
    );

    emblaMainApi.value.scrollTo(targetIndex, true);
  }

  function handleMainMouseLeave(e: MouseEvent) {
    if (!props.slideOnMainHover) return;
    isMoving.value = false;
  }

  watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  });
</script>

<template>
  <div
    class="relative w-full group/carousel"
    :style="{ '--gap': '0rem', '--count': items.length, '--n': 4 }"
  >
    <template v-if="!isEmpty">
      <!-- Main carousel -->
      <Carousel
        class="relative w-full"
        :opts="{ containScroll: 'trimSnaps', slidesToScroll: 1 }"
        @init-api="(val) => (emblaMainApi = val)"
        @mousemove="handleMainMouseMove"
        @mouseleave="handleMainMouseLeave"
      >
        <CarouselContent>
          <CarouselItem v-for="(item, index) in items" :key="index">
            <div class="w-full aspect-w-16 aspect-h-9">
              <img class="object-cover" :src="item.src" :alt="item.alt || ''" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <!-- Thumbs -->
      <div
        v-if="props.dotAsThumbnail"
        class="absolute bottom-0 p-3 bg-black/40 inset-x-0 z-[2] flex gap-2
          justify-center"
      >
        <button
          v-for="(_, index) in items"
          :key="index"
          :class="[
            `relative w-2 h-2 rounded-full before:block before:-inset-1
            before:absolute`,
            selectedIndex === index ? 'bg-primary' : 'bg-muted-foreground',
          ]"
          @click="onThumbClick(index)"
        ></button>
      </div>
      <Carousel
        v-else
        class="w-full"
        :opts="{
          containScroll: 'keepSnaps',
          dragFree: true,
          slidesToScroll: 1,
        }"
        @init-api="(val) => (emblaThumbnailApi = val)"
      >
        <CarouselContent class="flex gap-[--gap] ml-0">
          <CarouselItem
            v-for="(item, index) in items"
            :key="index"
            :data-active="booleanDataAttr(selectedIndex === index)"
            class="pl-0
              basis-[calc(100%/var(--n)_-_(var(--gap)*(var(--n)-1)/var(--n)))]
              bg-foreground cursor-pointer opacity-50 data-[active]:opacity-100"
          >
            <div
              class="w-full aspect-w-16 aspect-h-9 has-hover:hidden"
              @click="onThumbClick(index)"
            >
              <img
                class="object-cover"
                :src="item.thumbSrc || item.src"
                :alt="item.alt || ''"
              />
            </div>
            <div
              class="w-full aspect-w-16 aspect-h-9 no-hover:hidden"
              @mouseenter="onThumbClick(index)"
            >
              <img
                class="object-cover"
                :src="item.thumbSrc || item.src"
                :alt="item.alt || ''"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </template>
    <template v-else>
      <div class="w-full aspect-w-16 aspect-h-9 rounded-[inherit]">
        <div
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
    </template>
  </div>
</template>
