import { trackingReducer, initialState } from './tracking.reducer';
import { trackClick } from './tracking.actions';

describe('TrackingReducer', () => {
  it('should increment count for tag', () => {
    const state = trackingReducer(initialState, trackClick({ tag: 'btn1' }));
    expect(state['btn1']).toBe(1);
  });

  it('should increment count on existing tag', () => {
    const state1 = trackingReducer(initialState, trackClick({ tag: 'btn1' }));
    const state2 = trackingReducer(state1, trackClick({ tag: 'btn1' }));
    expect(state2['btn1']).toBe(2);
  });
});