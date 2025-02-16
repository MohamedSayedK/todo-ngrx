import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { AppState } from '../app.state';

export const selectTodoState = (state: AppState) => state.todos || { todos: [] };

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);