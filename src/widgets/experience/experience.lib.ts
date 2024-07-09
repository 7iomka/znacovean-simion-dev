import { ExperienceItem, Technology } from './experience.types';

interface GroupedExperience {
  [year: string]: ExperienceItem[];
}
export function groupByYear(
  experience: ExperienceItem[],
  sortOrder: 'asc' | 'desc' = 'asc',
) {
  const grouped: GroupedExperience = experience.reduce(
    (acc: GroupedExperience, item) => {
      const year = new Date(item.startDate).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    },
    {},
  );

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    return sortOrder === 'asc'
      ? parseInt(a) - parseInt(b)
      : parseInt(b) - parseInt(a);
  });

  return sortedYears.map((year) => ({
    year: Number(year),
    items: grouped[year],
  }));
}

export const technologyIconsMap = {
  default: 'icon-[uil--box]',
  vue: 'icon-[logos--vue]',
  nuxt: 'icon-[logos--nuxt-icon]',
  react: 'icon-[logos--react]',
  nextjs: 'icon-[logos--nextjs-icon]',
  effector: 'icon-[logos--effector]',
  tailwind: 'icon-[logos--tailwindcss-icon]',
  vuex: 'icon-[logos--vuex]',
} satisfies Record<Technology, string>;
