import { createEvent, createStore, restore, sample } from 'effector';
import { portfolioItems } from './portfolio.data';

const $items = createStore(portfolioItems);

const dialogStateChanged = createEvent<boolean>();
const $isDialogOpened = restore(dialogStateChanged, false);

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
  $isDialogOpened,
  activeItemIdChanged,
  openDialogActionClicked,
};
