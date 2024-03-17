import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import ArticlesIcon from '@/shared/assets/icons/Articles.svg?react';
import HomeIcon from '@/shared/assets/icons/home.svg?react';
import ListIcon from '@/shared/assets/icons/list.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'glavnaya-stranica',
      },
      {
        path: getRouteAbout(),
        Icon: ListIcon,
        text: 'o-nas',
      },
    ];
    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'articles',
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },
);
