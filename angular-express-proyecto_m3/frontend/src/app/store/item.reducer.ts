import { createReducer, on } from '@ngrx/store';
import { addItem } from './item.actions';
import { Item } from '../core/models/item.model';

export const initialState: Item[] = [];

export const itemReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => [...state, item])
);