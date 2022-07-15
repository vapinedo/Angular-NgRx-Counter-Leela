import { createAction } from "@ngrx/store";

export const decrement = createAction('decrement');
export const increment = createAction('increment');
export const reset = createAction('reset');