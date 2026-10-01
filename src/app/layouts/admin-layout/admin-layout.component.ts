import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  menuItems = [
    {
      icon: '🏠',
      label: 'Dashboard',
      route: '/admin/dashboard'
    },
    {
      icon: '👥',
      label: 'Users',
      route: '/admin/users'
    },
    {
      icon: '🏛️',
      label: 'Departments',
      route: '/admin/departments'
    },
    {
      icon: '🎓',
      label: 'Courses & Batches',
      route: '/admin/courses-batches'
    },
    {
      icon: '📖',
      label: 'Subjects',
      route: '/admin/subjects'
    },
    {
      icon: '⚙️',
      label: 'Skills',
      route: '/admin/skills'
    },
    {
      icon: '📊',
      label: 'Reports & Analytics',
      route: '/admin/reports'
    },
    {
      icon: '👤',
      label: 'My Profile',
      route: '/admin/profile'
    }
  ];

}