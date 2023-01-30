import { IAddResponse } from './models/IAddResult';
import { Todo } from './models/Todo';

export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    return { success: true, error: '' };
  } else {
    return { success: false, error: 'Du måste ange minst tre bokstäver' };
  }
}

export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}

export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}

export function sortTodosByName(todos: Todo[]) {
  let sortedTodos = todos.sort((a, b) => {
    return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
  });

  return sortedTodos;
}