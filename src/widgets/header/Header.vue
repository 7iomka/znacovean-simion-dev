<template>
  <header
    class="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-10 py-3 lg:py-4"
  >
    <div class="container">
      <div class="flex items-center justify-between gap-5">
        <div class="flex items-center space-x-4">
          <span
            :class="[
              'inline-flex items-center justify-center font-normal text-foreground',
              'select-none shrink-0 bg-secondary overflow-hidden h-10 w-10 text-xs rounded-full',
            ]"
          >
            <img
              role="img"
              src="/static/images/content/my-photo-sm.jpg"
              class="h-full w-full object-cover"
              alt="My photo"
            />
          </span>
          <div>
            <p class="text-sm font-medium">{{ appConfig.brandName }}</p>
            <p class="text-xs sm:text-sm text-muted-foreground">
              {{ appConfig.email }}
            </p>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { appConfig } from '@/shared/config/app-config';
  import Socials from '@/widgets/socials/Socials.vue';
</script>

<style scoped></style>
