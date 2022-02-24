import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, Dispatch } from './index';

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
