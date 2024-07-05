export type Technology =
  | 'default'
  | 'vue'
  | 'nuxt'
  | 'react'
  | 'nextjs'
  | 'effector'
  | 'vuex'
  | 'tailwind';

export interface ExperienceItem {
  id: number;
  startDate: string;
  endDate: string | null;
  companyName: string;
  companyIndustries: string[];
  position: string;
  description: string;
  technologies: Technology[];
}
