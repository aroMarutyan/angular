import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Harbits</h2>
    <ul>
      <li *ngFor="let habit of habits">{{ habit.title }}</li>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'Check in with chickens',
    },
    {
      id: 2,
      title: 'Check in with hens',
    },
    {
      id: 3,
      title: 'Check in with roosters',
    },
    {
      id: 4,
      title: 'Check in with cocks',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
