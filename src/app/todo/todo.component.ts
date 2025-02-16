import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo } from '../state/todo/todo.actions';
import { Todo } from './todo.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectAllTodos } from '../state/todo/todo.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports:[FormsModule,CommonModule],
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  allTodos$!: Observable<Todo[]>; 
  todo: string = '';

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.allTodos$ = this.store.select(selectAllTodos);
  }

  deleteTodo(todo : Todo){
    this.store.dispatch(deleteTodo({id: todo.id}))
  }

  addTodo(){
    this.store.dispatch(addTodo({content: this.todo}));
    this.todo = '';
  }
}
