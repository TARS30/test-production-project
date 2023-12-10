import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile',
  },
];
