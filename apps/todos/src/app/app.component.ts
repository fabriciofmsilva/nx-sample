import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@nx-sample/data';

@Component({
  selector: 'nx-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }
}
