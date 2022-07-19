import { createAction, props } from '@ngrx/store';
import { CounterStateI } from '../interfaces/counter.interface';

export const decrement = createAction('decrement');
export const increment = createAction('increment');
export const reset = createAction('reset');
export const incrementByValue = createAction(
  'incrementByValue',
  props<CounterStateI>()
);
