import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from 'react-redux';
import { TDispatch, TRootState, TThunk } from './types/store';

export const useDispatch = () => dispatchHook<TDispatch | TThunk>();
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;
