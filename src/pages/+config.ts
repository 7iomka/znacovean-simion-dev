import vikeVue from 'vike-vue/config';
import type { Config } from 'vike/types';
import Head from '@/widgets/layouts/HeadDefault.vue';
import Layout from '@/widgets/layouts/LayoutDefault.vue';

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,

  // <title>
  title: 'My Vike App',
  extends: vikeVue,
} satisfies Config;
