import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  stats = [
    {
      title: 'Total Users',
      value: '1,248',
      change: '5%',
      note: 'vs last month',
      icon: '👥',
      className: 'purple'
    },
    {
      title: 'Departments',
      value: '12',
      change: '1',
      note: 'new this semester',
      icon: '🏛️',
      className: 'green'
    },
    {
      title: 'Courses',
      value: '42',
      change: '4%',
      note: 'new this semester',
      icon: '🎓',
      className: 'orange'
    },
    {
      title: 'Subjects',
      value: '156',
      change: '8%',
      note: 'added this month',
      icon: '📄',
      className: 'blue'
    }
  ];

  departmentData = [
    { name: 'Computer Science', users: 320, courses: 20 },
    { name: 'Information Technology', users: 280, courses: 18 },
    { name: 'Management', users: 220, courses: 12 },
    { name: 'Commerce', users: 180, courses: 10 },
    { name: 'Others', users: 240, courses: 8 }
  ];

  tasks = [
    {
      icon: '👤',
      title: 'Approve new student registrations',
      count: '12',
      date: '2 Sep',
      className: 'red'
    },
    {
      icon: '✓',
      title: 'Verify faculty documents',
      count: '5',
      date: '3 Sep',
      className: 'blue'
    },
    {
      icon: '🎓',
      title: 'Create new batch for Semester 7',
      count: '1',
      date: '4 Sep',
      className: 'green'
    },
    {
      icon: '📖',
      title: 'Update subject mapping',
      count: '1',
      date: '5 Sep',
      className: 'orange'
    },
    {
      icon: '▥',
      title: 'Generate semester report',
      count: '1',
      date: '7 Sep',
      className: 'purple'
    }
  ];

  activities = [
    {
      icon: '👤',
      title: 'New student registered',
      time: '2 hours ago'
    },
    {
      icon: '●',
      title: 'Faculty profile updated',
      time: '4 hours ago'
    },
    {
      icon: '📖',
      title: 'New course added: AI & ML',
      time: '1 day ago'
    },
    {
      icon: '🎓',
      title: 'Batch created: MCA Sem 5',
      time: '2 days ago'
    },
    {
      icon: '▤',
      title: 'Subject updated: Web Development',
      time: '2 days ago'
    }
  ];

  insights = [
    {
      icon: '👥',
      text: 'Student enrollment increased by 5%.'
    },
    {
      icon: '🎓',
      text: '2 departments have low course offerings.'
    },
    {
      icon: '✓',
      text: 'Attendance rate is above 90%.'
    },
    {
      icon: '💡',
      text: '3 new courses can be introduced based on demand.'
    },
    {
      icon: '🛡️',
      text: 'System performance is optimal.'
    }
  ];

}