import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileScheme } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { articleDetailsScheme } from 'entities/Article';
import { ArticleDetailsCommentsScheme }
  from '../../../../pages/ArticleDetailsPage/model/types/ArticleDetailsCommentsScheme';

export interface StateScheme {
    user: UserScheme;
    counter: CounterScheme;
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: articleDetailsScheme
    articleDetailsComments?: ArticleDetailsCommentsScheme
}

export type StateSchemeKey = keyof StateScheme

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add:(key: StateSchemeKey, reducer: Reducer) => void;
    remove: (key: StateSchemeKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
