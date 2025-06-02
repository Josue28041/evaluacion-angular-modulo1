import { createAction, props } from '@ngrx/store';

export const trackClick = createAction('[Tracking] Click', props<{ tag: string }>());