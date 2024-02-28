import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/consts';

export const getUserRole = (state: StateScheme) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
