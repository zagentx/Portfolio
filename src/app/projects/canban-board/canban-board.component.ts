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
      cards: ['Task 1', 'Task 2', 'Task 3'],
    },
    {
      title: 'In Progress',
      cards: ['Task 4', 'Task 5'],
    },
    {
      title: 'Done',
      cards: ['Task 6'],
    },
  ];
}
