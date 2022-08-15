import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class PureTaskListComponent {

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  tasksInOrder: Task[] = [];

  /**
   * Checks if it's in the loading state
   */
  @Input() loading: boolean = false;

  /**
   * Event to change the task to pinned
   */
  @Output()
  onPinTask = new EventEmitter();

  /**
   * Event to change the task to archived
   */
  @Output()
  onArchiveTask = new EventEmitter();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED')
    ];
    const filteredTasks = initialTasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
    this.tasksInOrder = filteredTasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
  }

  constructor() { }

}
