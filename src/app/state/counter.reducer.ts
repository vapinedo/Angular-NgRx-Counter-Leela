import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from './counter.actions';
import { initialState } from './counter.state';

const _counterRecucer = createReducer(
  initialState,
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),   

  on(incrementByValue, (state, action) => {
    console.log({action});
    return {
      ...state,
      counter: state.counter + action.counter,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterRecucer(state, action);
}
