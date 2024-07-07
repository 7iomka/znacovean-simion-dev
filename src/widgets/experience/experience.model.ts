import { createStore } from 'effector';
import { ExperienceItem } from './experience.types';
import { groupByYear } from './experience.lib';

const experienceItems = [
  {
    id: 7,
    startDate: '2022-01-01',
    endDate: null,
    companyName: 'VPA.group',
    companyIndustries: [],
    position: 'Senior frontend developer [React, next.js]',
    description:
      'Development from scratch of a large online store.\nStack: next.js, effector',
    technologies: ['nextjs', 'react', 'effector', 'tailwind'],
  },
  {
    id: 6,
    startDate: '2021-05-01',
    endDate: '2021-08-01',
    companyName: '<Private info>',
    companyIndustries: [],
    position: 'Middle Vue developer',
    description:
      'Support, administration and addition of new functionality of the administrative part of the web application (Vue.js, Vuex, Vue CLI, Vuesax, Tailwind)',
    technologies: ['vue', 'vuex', 'tailwind'],
  },
  {
    id: 5,
    startDate: '2020-09-01',
    endDate: '2021-08-01',
    companyName: 'QubitLife (Qubittech)',
    companyIndustries: [],
    position: 'Webmaster',
    description:
      'Website development:\n- layout designer of ready-made layouts\n- layout integration into Django template engine',
    technologies: [],
  },
  {
    id: 4,
    startDate: '2020-06-01',
    endDate: '2020-12-01',
    companyName: '<Private info>',
    companyIndustries: [],
    position: 'Middle / Senior react developer',
    description:
      'Development from scratch of a web application (React, Effector, Next.js) for the sale of spare parts for large equipment.',
    technologies: ['nextjs', 'react', 'effector'],
  },
  {
    id: 3,
    startDate: '2016-07-01',
    endDate: '2020-05-01',
    companyName: 'Seosintez.ru',
    companyIndustries: [],
    position: 'Webmaster',
    description: 'Website development (layout designer of ready-made layouts)',
    technologies: [],
  },
  {
    id: 2,
    startDate: '2019-09-01',
    endDate: '2020-02-01',
    companyName: 'Confideline',
    companyIndustries: [],
    position: 'Middle Vue developer',
    description:
      'Developing a custom email service web application from scratch (Vue.js, Vuex)',
    technologies: ['vue', 'vuex'],
  },
  {
    id: 1,
    startDate: '2015-05-01',
    endDate: '2016-05-01',
    companyName: 'Webus.md',
    companyIndustries: [],
    position: 'Webmaster',
    description:
      'Development of new and revision of the old functionality of outsourcing websites.',
    technologies: [],
  },
] satisfies ExperienceItem[];

const $items = createStore(experienceItems);
const $groupedItems = $items.map((items) => groupByYear(items, 'desc'));

export const $$experience = { $groupedItems };
