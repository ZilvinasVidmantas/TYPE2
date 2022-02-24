import {
  TypedUseSelectorHook,
  useDispatch as useReactReduxDispatch,
  useSelector as UseReactReduxSelector
} from 'react-redux';
import type { State, Dispatch } from './index';

export const useDispatch = () => useReactReduxDispatch<Dispatch>();
export const useSelector: TypedUseSelectorHook<State> = UseReactReduxSelector;
