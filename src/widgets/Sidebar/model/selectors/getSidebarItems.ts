import ArticlesIcon from 'shared/assets/icons/Articles.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { createSelector } from '@reduxjs/toolkit';
/// //////////////////////////////////////////////////////////////////////
import { getUserAuthData } from 'entitiess/User'; // такой вот импорт считается неправильным типа, и эта курва его хочет видеть в node_modules какого-то хера
// import { getUserAuthData } from '../../../../entities/User'; // такой вот импорт уже считается как правильный, я во всех ошибках на относительные поменял, оно-то прокатило, но хотелось бы понять шо такое
/// //////////////////////////////////////////////////////////////////////

import { RoutePath } from 'shared/config/routeConfig/routeConfig'; // <-- хотя вот такое канает :/
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
