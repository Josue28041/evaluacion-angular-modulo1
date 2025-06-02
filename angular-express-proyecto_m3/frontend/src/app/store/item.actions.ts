import { createAction, props } from '@ngrx/store';
import { Item } from '../core/models/item.model';

export const addItem = createAction('[Item] Add', props<{ item: Item }>());