import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateScheme, StateSchemeKey } from '@/app/providers/StoreProvider/config/StateScheme';

export type ReducersList = {
  [name in StateSchemeKey]?: Reducer<NonNullable<StateScheme[name]>>
}

interface DynamicModuleLoaderProps {
    reducers:ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager;

  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemeKey];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemeKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemeKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line
    <>{ children }</>
  );
};
