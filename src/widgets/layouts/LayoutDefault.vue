<template>
  <TooltipProvider :delay-duration="200" :skip-delay-duration="100">
    <div class="layout">
      <Header />
      <PageContainer><slot /></PageContainer>
    </div>
  </TooltipProvider>
</template>

<script lang="ts" setup>
  import PageContainer from '@/shared/ui/page-container/PageContainer.vue';
  import { TooltipProvider } from '@/shared/ui/tooltip';
  import Header from '@/widgets/header/Header.vue';
</script>

<style>
  @import '../../shared/styles/common.css';
</style>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    padding: 20px;
    padding-bottom: 50px;
    min-height: 100vh;
    flex-grow: 1;
  }
  /* Page Transition Animation */
  #page-content {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  body.page-is-transitioning #page-content {
    opacity: 0;
  }
</style>
