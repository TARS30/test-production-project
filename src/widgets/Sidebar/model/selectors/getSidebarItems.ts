import { createSelector } from '@reduxjs/toolkit';
import ArticlesIcon from '@/shared/assets/icons/Articles.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ListIcon from '@/shared/assets/icons/list.svg?react';
import HomeIcon from '@/shared/assets/icons/home.svg?react';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'glavnaya-stranica',
      },
      {
        path: RoutePath.about,
        Icon: ListIcon,
        text: 'o-nas',
      },
    ];
    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'articles',
          authOnly: true,
        },
      );
    }
    return sidebarItemsList;
  },
);
