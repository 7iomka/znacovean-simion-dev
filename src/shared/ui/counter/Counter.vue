<template>
  <button
    type="button"
    class="inline-block rounded border border-black bg-gray-200 px-2 py-1
      text-xs font-medium uppercase leading-normal"
    @click="state.count++"
  >
    Counter {{ state.count }}
  </button>
</template>

<script lang="ts">
  import { reactive } from 'vue';

  export default {
    setup() {
      const state = reactive({ count: 0 });
      return {
        state,
      };
    },
  };
</script>
