import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';

export const getScrollSaver = (state: StateScheme) => state.scrollSaver.scroll;

export const getScrollSaverByPath = createSelector(
  getScrollSaver,
  (state: StateScheme, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
