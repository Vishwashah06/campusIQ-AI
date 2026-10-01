import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  searchText: string = '';
  selectedCollege: string = 'All Colleges';
  selectedStatus: string = 'Active Departments';

  departments = [
    {
      id: 1,
      icon: '🖥️',
      name: 'Computer Science',
      code: 'CS',
      hod: 'Dr. Ramesh Patel',
      faculty: 12,
      courses: 8,
      status: 'Active',
      type: 'blue'
    },
    {
      id: 2,
      icon: '💻',
      name: 'Information Technology',
      code: 'IT',
      hod: 'Dr. Kavita Sharma',
      faculty: 10,
      courses: 6,
      status: 'Active',
      type: 'blue'
    },
    {
      id: 3,
      icon: '🏢',
      name: 'Management',
      code: 'MGT',
      hod: 'Dr. Amit Shah',
      faculty: 8,
      courses: 5,
      status: 'Active',
      type: 'green'
    },
    {
      id: 4,
      icon: '🛢️',
      name: 'Commerce',
      code: 'COM',
      hod: 'Dr. Neha Mehta',
      faculty: 9,
      courses: 6,
      status: 'Active',
      type: 'orange'
    },
    {
      id: 5,
      icon: '🧪',
      name: 'Science',
      code: 'SCI',
      hod: 'Dr. Pooja Desai',
      faculty: 11,
      courses: 7,
      status: 'Active',
      type: 'purple'
    },
    {
      id: 6,
      icon: '🖌️',
      name: 'Arts',
      code: 'ART',
      hod: 'Dr. Vivek Joshi',
      faculty: 7,
      courses: 4,
      status: 'Active',
      type: 'pink'
    },
    {
      id: 7,
      icon: '⚙️',
      name: 'Engineering',
      code: 'ENG',
      hod: 'Dr. Sanjay Kulkarni',
      faculty: 14,
      courses: 8,
      status: 'Active',
      type: 'purple'
    },
    {
      id: 8,
      icon: '❤️',
      name: 'Health Sciences',
      code: 'HS',
      hod: 'Dr. Priya Patel',
      faculty: 6,
      courses: 3,
      status: 'Active',
      type: 'pink'
    },
    {
      id: 9,
      icon: '⚖️',
      name: 'Law',
      code: 'LAW',
      hod: 'Dr. Manish Verma',
      faculty: 5,
      courses: 4,
      status: 'Inactive',
      type: 'orange'
    },
    {
      id: 10,
      icon: '🌐',
      name: 'Media & Communication',
      code: 'MC',
      hod: 'Dr. Rupal Shah',
      faculty: 4,
      courses: 3,
      status: 'Active',
      type: 'blue'
    }
  ];

  get filteredDepartments() {
    const search = this.searchText.toLowerCase().trim();

    return this.departments.filter(department => {

      const matchesSearch =
        department.name.toLowerCase().includes(search) ||
        department.code.toLowerCase().includes(search) ||
        department.hod.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All Departments' ||
        (this.selectedStatus === 'Active Departments' &&
          department.status === 'Active') ||
        (this.selectedStatus === 'Inactive Departments' &&
          department.status === 'Inactive');

      return matchesSearch && matchesStatus;
    });
  }

  resetFilters() {
    this.searchText = '';
    this.selectedCollege = 'All Colleges';
    this.selectedStatus = 'Active Departments';
  }

  viewDepartment(department: any) {
    console.log('View Department:', department);
  }

  editDepartment(department: any) {
    console.log('Edit Department:', department);
  }

  deleteDepartment(department: any) {
    console.log('Delete Department:', department);
  }

  addDepartment() {
    console.log('Add Department clicked');
  }
}
