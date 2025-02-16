import {createAction, props} from '@ngrx/store'

export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ content: string }>()
  );


export const deleteTodo = createAction(
  '[Todo Page] Delete Todo',
  props<{ id: string }>()
);