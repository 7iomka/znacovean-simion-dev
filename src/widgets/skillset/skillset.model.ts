import { createStore } from 'effector';
import { SkillGroup } from './skillset.types';
import { skillsetIconsMap } from '@/shared/lib/icon-mapping';

const skillGroups = [
  {
    name: 'React',
    iconClass: skillsetIconsMap.react.iconClass,
    skills: ['js', 'ts', 'effector', 'vite', 'nextjs', 'redux', 'webpack'],
  },
  {
    name: 'Vue',
    iconClass: skillsetIconsMap.vue.iconClass,
    skills: ['js', 'ts', 'vuex', 'vite', 'nuxtjs'],
  },
  {
    name: 'No framework',
    iconClass: skillsetIconsMap.webpack.iconClass,
    skills: ['html', 'css', 'sass', 'js', 'ts', 'figma', 'photoshop'],
  },
] satisfies SkillGroup[];

const $skillGroups = createStore<SkillGroup[]>(skillGroups);

export const $$skillset = { $skillGroups };
