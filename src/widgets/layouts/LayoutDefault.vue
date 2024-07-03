<template>
  <div class="layout">
    <Sidebar>
      <Link href="/"> Welcome </Link>
      <Link href="/todo"> Todo </Link>
      <Link href="/star-wars"> Data Fetching </Link>
    </Sidebar>
    <PageContainer><slot /></PageContainer>
  </div>
</template>

<script lang="ts" setup>
  import Link from '@/shared/ui/link/Link.vue';
  import PageContainer from '@/shared/ui/page-container/PageContainer.vue';
  import Sidebar from '@/shared/ui/sidebar/Sidebar.vue';
</script>

<style>
  @import '../../shared/styles/common.css';
</style>

<style scoped>
  .layout {
    display: flex;
    max-width: 900px;
    margin: auto;
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
