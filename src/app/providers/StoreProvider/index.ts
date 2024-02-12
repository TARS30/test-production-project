import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
  StateScheme,
  ThunkConfig,
} from './config/StateScheme';

export {
  StoreProvider,
  createReduxStore,
};

export type {
  AppDispatch,
};
