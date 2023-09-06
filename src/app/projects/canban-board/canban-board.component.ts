import { Component } from '@angular/core';

@Component({
  selector: 'app-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss'],
})
export class CanbanBoardComponent {
  columns = [
    {
      title: 'To Do',
      tasks: [],
      newTask: '',
    },
    {
      title: 'In Progress',
      tasks: [],
      newTask: '',
    },
    {
      title: 'Done',
      tasks: [],
      newTask: '',
    },
  ];

  addTask(column: { newTask: string; tasks: any[] }) {
    if (column.newTask) {
      column.tasks.push(column.newTask);
      column.newTask = '';
    }
  }

  moveTask(taskIndex: number, fromColumnIndex: number, toColumnIndex: number) {
    const task = this.columns[fromColumnIndex].tasks.splice(taskIndex, 1)[0];
    this.columns[toColumnIndex].tasks.push(task);
  }

  autoGrow(element: { style: { height: string }; scrollHeight: string }) {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }
}
