import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-sample/data';

@Component({
  selector: 'nx-sample-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
