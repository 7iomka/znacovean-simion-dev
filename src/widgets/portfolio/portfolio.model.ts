import { createEvent, createStore, restore, sample } from 'effector';
import type { PortfolioItem } from './portfolio.types';

const portfolioItems: PortfolioItem[] = [
  {
    id: 'dilan_mirror',
    title: 'Dilan Mirror',
    startDate: '2023-12-01',
    endDate: null,
    thubmnail:
      '/static/images/content/portfolio/dilan-mirror/dilan-mirror__sm.jpg',
    fullImage:
      '/static/images/content/portfolio/dilan-mirror/dilan-mirror__full.jpg',
    url: '#!',
    excerpt:
      'SPA landing for a smart mirror project with technology to show the back of the body.',
    description: 'Description',
    skills: ['ts', 'react', 'vite', 'effector', 'photoshop', 'figma'],
  },
  {
    id: '2',
    title: 'Item2',
    startDate: '2022-01-01',
    endDate: null,
    url: '#!',
    excerpt: 'Excerpt',
    description: 'Description',
    skills: ['vue', 'vuex', 'sass', 'js'],
  },
  {
    id: '3',
    title: 'Item3',
    startDate: '2022-01-01',
    endDate: null,
    url: '#!',
    excerpt: 'Excerpt',
    description: 'Description',
    skills: ['nuxtjs', 'vuex', 'sass'],
  },
];

const $items = createStore(portfolioItems);

const dialogStateChanged = createEvent<boolean>();

const activeItemIdChanged = createEvent<string | null>();
const $activeItemId = restore(activeItemIdChanged, null);

const openDialogActionClicked = createEvent<string>();

sample({
  clock: openDialogActionClicked,
  target: activeItemIdChanged,
});

sample({
  clock: openDialogActionClicked,
  fn: () => true,
  target: dialogStateChanged,
});

export const $$portfolio = {
  $items,
  $activeItemId,
  dialogStateChanged,
  activeItemIdChanged,
  openDialogActionClicked,
};
