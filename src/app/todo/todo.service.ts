import { Injectable } from '@angular/core';
import { promise } from 'protractor';

const TODOS = [
  {title: 'Maîtriser le CRUD', isDone: true},
  {title: 'chercher à comprendre un maximum les choses', isDone: false},
  {title: "Savoir dire que l'on ne sait pas", isDone: true},
  {title: 'Finir mon projet RNCP', isDone: true},
  {title:'Finir mes dossiers', isDone: false},
  {title: 'Commencer à lire des livres', isDone: false},
  {title: 'Arranger les choses que je suis capable de remettre sur de bon rails', isDone: false}
] 

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get(){
    return new Promise(resolve => resolve(TODOS))
  }

  add(data){
    return new Promise(resolve =>{
      TODOS.push(data);
      resolve(data);
    })
  }

  put(changed){
    return new Promise(resolve=>{
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    })
  }

  delete(selected){
    return new Promise(resolve =>{
      const index = TODOS.findIndex(todo => todo === selected)
      TODOS.splice(index, 1);
      resolve(true)
    })
  }
}
