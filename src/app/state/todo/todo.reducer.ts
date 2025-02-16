import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../todo/todo.interface";
import { addTodo, deleteTodo } from "./todo.actions";

export interface TodoState{
    todos: Todo[];
    error: string;
    status: "pending" | "loading" | "error" | "success"
}


export const initialState: TodoState = {
    todos: [],
    error: '',
    status: "pending"
}


export const todoReducer = createReducer(
    initialState,
    //Add a new Todo
    on(addTodo, (state,{content}) =>({
        ...state,
        todos:[...state.todos, {id: Date.now().toString(), content: content}]
    })),

    //Delete state
    on(deleteTodo, (state,{id}) =>({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    }))
)