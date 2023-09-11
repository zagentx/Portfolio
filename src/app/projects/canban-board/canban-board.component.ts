import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss'],
})
export class CanbanBoardComponent implements OnInit {
  columns = [
    {
      title: 'To Do',
      tasks: [] as string[],
      newTask: '',
    },
    {
      title: 'In Progress',
      tasks: [] as string[],
      newTask: '',
    },
    {
      title: 'Done',
      tasks: [] as string[],
      newTask: '',
    },
  ];
  newTask = '';

  ngOnInit() {
    const savedColumns = localStorage.getItem('columns');
    if (savedColumns) {
      this.columns = JSON.parse(savedColumns);
    }
  }

  addTask(column: { newTask: string; tasks: any[] }) {
    if (column.newTask) {
      column.tasks.push(column.newTask);
      column.newTask = '';
      this.saveTasks();
    }
  }

  moveTask(taskIndex: number, fromColumnIndex: number, toColumnIndex: number) {
    const task = this.columns[fromColumnIndex].tasks.splice(taskIndex, 1)[0];
    this.columns[toColumnIndex].tasks.push(task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  editTask(columnIndex: number, taskIndex: number, newTask: string) {
    this.columns[columnIndex].tasks[taskIndex] = newTask;
    this.saveTasks();
  }

  deleteTask(columnIndex: number, taskIndex: number) {
    this.columns[columnIndex].tasks.splice(taskIndex, 1);
    this.saveTasks();
  }
}
