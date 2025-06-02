import { createReducer, on } from '@ngrx/store';
import { trackClick } from './tracking.actions';

export const initialState: { [tag: string]: number } = {};

export const trackingReducer = createReducer(
  initialState,
  on(trackClick, (state, { tag }) => ({
    ...state,
    [tag]: (state[tag] || 0) + 1
  }))
);