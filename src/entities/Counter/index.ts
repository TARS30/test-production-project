import type { CounterScheme } from './model/types/counterScheme';
import { counterReducer } from './model/slice/CounterSlice';
import { Counter } from './ui/Counter';

export {
  counterReducer,
  Counter,
  CounterScheme,

};
