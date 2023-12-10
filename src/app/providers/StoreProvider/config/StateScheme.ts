import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/authByUserName';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;
    loginForm?: LoginScheme
}

export type StateSchemeKey = keyof StateScheme

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state:StateScheme, action:AnyAction) => CombinedState<StateScheme>
    add:(name:StateSchemeKey, reducer: Reducer) => void
    remove: (name:StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme>{
    reducerManager: ReducerManager
}
