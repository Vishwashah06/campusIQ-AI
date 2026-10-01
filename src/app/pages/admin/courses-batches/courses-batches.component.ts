import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  icon: string;
  name: string;
  code: string;
  department: string;
  batches: number;
  enrollments: number;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-courses-batches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses-batches.component.html',
  styleUrls: ['./courses-batches.component.css']
})
export class CoursesBatchesComponent {

  activeTab: 'courses' | 'batches' | 'mapping' = 'courses';

  searchText = '';
  selectedDepartment = 'All Departments';
  selectedStatus = 'All Status';
  selectedSemester = 'All Semesters';

  currentPage = 1;
  itemsPerPage = 10;

  courses: Course[] = [
    {
      id: 1,
      icon: '</>',
      name: 'Data Structures',
      code: 'CS101',
      department: 'Computer Science',
      batches: 5,
      enrollments: 120,
      status: 'Active'
    },
    {
      id: 2,
      icon: '▣',
      name: 'Web Development',
      code: 'IT102',
      department: 'Information Technology',
      batches: 6,
      enrollments: 180,
      status: 'Active'
    },
    {
      id: 3,
      icon: '▤',
      name: 'Database Management',
      code: 'CS103',
      department: 'Computer Science',
      batches: 4,
      enrollments: 110,
      status: 'Active'
    },
    {
      id: 4,
      icon: '▣',
      name: 'Operating Systems',
      code: 'CS104',
      department: 'Computer Science',
      batches: 5,
      enrollments: 130,
      status: 'Active'
    },
    {
      id: 5,
      icon: '⚙',
      name: 'Software Engineering',
      code: 'IT201',
      department: 'Information Technology',
      batches: 4,
      enrollments: 98,
      status: 'Active'
    },
    {
      id: 6,
      icon: '⚑',
      name: 'Digital Marketing',
      code: 'COM101',
      department: 'Commerce',
      batches: 3,
      enrollments: 75,
      status: 'Inactive'
    },
    {
      id: 7,
      icon: '✣',
      name: 'Artificial Intelligence',
      code: 'CS301',
      department: 'Computer Science',
      batches: 3,
      enrollments: 85,
      status: 'Active'
    },
    {
      id: 8,
      icon: '☁',
      name: 'Cloud Computing',
      code: 'IT302',
      department: 'Information Technology',
      batches: 4,
      enrollments: 92,
      status: 'Active'
    },
    {
      id: 9,
      icon: '▥',
      name: 'Business Analytics',
      code: 'COM203',
      department: 'Commerce',
      batches: 3,
      enrollments: 60,
      status: 'Active'
    },
    {
      id: 10,
      icon: '♟',
      name: 'Human Resource Management',
      code: 'MGT101',
      department: 'Management',
      batches: 2,
      enrollments: 48,
      status: 'Active'
    }
  ];

  get filteredCourses(): Course[] {
    const search = this.searchText.trim().toLowerCase();

    return this.courses.filter(course => {

      const matchesSearch =
        !search ||
        course.name.toLowerCase().includes(search) ||
        course.code.toLowerCase().includes(search) ||
        course.department.toLowerCase().includes(search);

      const matchesDepartment =
        this.selectedDepartment === 'All Departments' ||
        course.department === this.selectedDepartment;

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        course.status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }

  get totalCourses(): number {
    return 42;
  }

  get totalBatches(): number {
    return 68;
  }

  get totalEnrollments(): number {
    return 1248;
  }

  get activeBatches(): number {
    return 56;
  }

  setTab(tab: 'courses' | 'batches' | 'mapping'): void {
    this.activeTab = tab;
  }

  resetFilters(): void {
    this.searchText = '';
    this.selectedDepartment = 'All Departments';
    this.selectedStatus = 'All Status';
    this.selectedSemester = 'All Semesters';
    this.currentPage = 1;
  }

  addCourse(): void {
    alert('Add Course button clicked');
  }

  viewCourse(course: Course): void {
    alert(`Viewing ${course.name}`);
  }

  editCourse(course: Course): void {
    alert(`Editing ${course.name}`);
  }

  deleteCourse(course: Course): void {
    const confirmed = confirm(
      `Are you sure you want to delete ${course.name}?`
    );

    if (confirmed) {
      this.courses = this.courses.filter(c => c.id !== course.id);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    this.currentPage++;
  }
}