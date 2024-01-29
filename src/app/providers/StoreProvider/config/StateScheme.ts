import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsScheme } from 'entities/Article';
import { CounterScheme } from 'entities/Counter';
import { ProfileScheme } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { AddCommentFormScheme } from 'features/AddCommentForm';
import { LoginScheme } from 'features/AuthByUsername';
import { ArticleDetailsCommentsScheme, ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage';
import { ArticlesPageScheme } from 'pages/ArticlesPage';
import { CombinedState } from 'redux';
import { ScrollSaverScheme } from 'widgets/Page/ScrollSaver/types/ScrollSaverScheme';
import { ArticleRecommendationsScheme } from
  '../../../../pages/ArticleDetailsPage/model/types/ArticleRecommendationsScheme';

export interface StateScheme {
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
