import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  stats = [
    {
      title: 'Total Users',
      value: '1,248',
      change: '5%',
      icon: '👥',
      color: 'purple'
    },
    {
      title: 'Total Courses',
      value: '42',
      change: '8%',
      icon: '🎓',
      color: 'green'
    },
    {
      title: 'Total Subjects',
      value: '156',
      change: '6%',
      icon: '📖',
      color: 'orange'
    },
    {
      title: 'Overall Activity',
      value: '3,842',
      change: '12%',
      icon: '▥',
      color: 'blue'
    }
  ];


  departments = [
    {
      name: 'Computer Science',
      value: 320,
      percent: 95,
      color: 'purple'
    },
    {
      name: 'Information Technology',
      value: 280,
      percent: 83,
      color: 'blue'
    },
    {
      name: 'Management',
      value: 180,
      percent: 54,
      color: 'orange'
    },
    {
      name: 'Commerce',
      value: 150,
      percent: 45,
      color: 'pink'
    },
    {
      name: 'Science',
      value: 120,
      percent: 36,
      color: 'green'
    },
    {
      name: 'Arts',
      value: 100,
      percent: 30,
      color: 'purple'
    },
    {
      name: 'Engineering',
      value: 98,
      percent: 29,
      color: 'blue'
    }
  ];

}