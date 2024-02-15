import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsScheme } from 'entitiess/Article';
import { CounterScheme } from 'entitiess/Counter';
import { UserScheme } from 'entitiess/User';
import { AddCommentFormScheme } from 'features/AddCommentForm';
import { LoginScheme } from 'features/AuthByUsername';
import { ProfileScheme } from 'features/EditableProfileCard';
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage';
import { ArticlesPageScheme } from 'pages/ArticlesPage';
import { CombinedState } from 'redux';
import { rtkApi } from 'shared/api/rtkApi';
import { ScrollSaverScheme } from 'widgets/Page/ScrollSaver/types/ScrollSaverScheme';

export interface StateScheme {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    user: UserScheme;
    counter: CounterScheme;
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    scrollSaver: ScrollSaverScheme;
    articlesPage?: ArticlesPageScheme;
    articleDetails?: articleDetailsScheme;
    addCommentForm?: AddCommentFormScheme;
    ArticleDetailsPage?: ArticleDetailsPageScheme;
}

export type StateSchemeKey = keyof StateScheme

export type MountedReducers = OptionalRecord<StateSchemeKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add:(key: StateSchemeKey, reducer: Reducer) => void;
    remove: (key: StateSchemeKey) => void;
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
