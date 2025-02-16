import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = (state: any) => state.app;

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);