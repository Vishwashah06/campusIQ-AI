import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [

  /* ================= LOGIN ================= */

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  /* ================= REGISTER ================= */

  {
    path: 'register',
    component: RegisterComponent
  },

  /* ================= STUDENT ================= */

  {
    path: 'student-dashboard',
    component: StudentDashboardComponent
  },


  /* ================= ADMIN ================= */

  {
    path: 'admin',

    component: AdminLayoutComponent,

    children: [

      /* DEFAULT ADMIN ROUTE */

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },


      /* ================= DASHBOARD ================= */

      {
        path: 'dashboard',

        loadComponent: () =>
          import('./pages/admin/admin-dashboard/admin-dashboard.component')
            .then(m => m.AdminDashboardComponent)
      },


      /* ================= PROFILE ================= */

      {
        path: 'profile',

        loadComponent: () =>
          import('./pages/admin/admin-profile/admin-profile.component')
            .then(m => m.AdminProfileComponent)
      },


      /* ================= USERS ================= */

      {
        path: 'users',

        loadComponent: () =>
          import('./pages/admin/users/users.component')
            .then(m => m.UsersComponent)
      },


      /* ================= DEPARTMENTS ================= */

      {
        path: 'departments',

        loadComponent: () =>
          import('./pages/admin/departments/departments.component')
            .then(m => m.DepartmentsComponent)
      },


      /* ================= COURSES & BATCHES ================= */

      {
        path: 'courses-batches',

        loadComponent: () =>
          import('./pages/admin/courses-batches/courses-batches.component')
            .then(m => m.CoursesBatchesComponent)
      },


      /* ================= SUBJECTS ================= */

      {
        path: 'subjects',

        loadComponent: () =>
          import('./pages/admin/subjects/subjects.component')
            .then(m => m.SubjectsComponent)
      },


      /* ================= SKILLS ================= */

      {
        path: 'skills',

        loadComponent: () =>
          import('./pages/admin/skills/skills.component')
            .then(m => m.SkillsComponent)
      },


      /* ================= REPORTS ================= */

      {
        path: 'reports',

        loadComponent: () =>
          import('./pages/admin/reports/reports.component')
            .then(m => m.ReportsComponent)
      }

    ]
  },


  /* ================= UNKNOWN URL ================= */

  {
    path: '**',
    redirectTo: 'admin/dashboard'
  }

];