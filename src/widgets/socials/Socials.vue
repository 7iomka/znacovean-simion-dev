<template>
  <div :class="cn('flex items-center', props.class, props.classNames?.root)">
    <a
      v-for="item in items"
      :class="
        cn(
          'flex items-center justify-center shrink-0 w-8 h-8 xsl:w-9 xsl:h-9 transition-colors text-muted-foreground hover:text-foreground',
          props.classNames?.item,
        )
      "
      :key="item.name"
      :aria-label="item.name"
      :title="item.name"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        :class="cn(item.icon, props.classNames?.icon, 'w-5 h-5 sm:w-6 sm:h-6')"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '@/shared/lib/cn';
  import { appConfig } from '@/shared/config/app-config';

  interface SocialItem {
    name: string;
    url: string;
    icon: string;
  }

  interface SocialsProps {
    class?: string;
    classNames?: {
      root?: string;
      item?: string;
      icon?: string;
    };
    items?: SocialItem[];
  }

  const props = withDefaults(defineProps<SocialsProps>(), {
    items: () => [
      {
        name: 'Telegram',
        url: appConfig.telegramUrl,
        icon: 'icon-[uil--telegram]',
      },
      {
        name: 'LinkedIn',
        url: appConfig.linkedinUrl,
        icon: 'icon-[uil--linkedin]',
      },
      {
        name: 'Github',
        url: appConfig.githubUrl,
        icon: 'icon-[uil--github]',
      },
    ],
  });
</script>

<style scoped></style>
