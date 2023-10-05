import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  public todos:any;
  public activeTasks:boolean;
  public newTodo:string = '';

  constructor(private todoService: TodoService) { }

  getTodos(){
    return this.todoService.get().then(todos =>{
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => !todo.isDone).length;
    })
  }

  ngOnInit() {
    this.getTodos()
  }

  addTodo(){
    this.todoService.add({ title: this.newTodo, isDone: false })
    .then(() => {
      return this.getTodos();
    })
    .then(() => {
      this.newTodo = '';
    })
    .catch(error => {
      console.error('Une erreur est survenue :', error);
    });
  }

  updateTodo(todo, newValue){
    todo.title = newValue;
    return this.todoService.put(todo).then(()=>{
      todo.editing = false
      return this.getTodos();
    })
  }

  destroyTodo(todo){
    this.todoService.delete(todo).then(()=>{
      return this.getTodos();
    })
  }
}
