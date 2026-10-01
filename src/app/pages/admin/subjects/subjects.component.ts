import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Subject {
  id: number;
  name: string;
  code: string;
  department: string;
  course: string;
  semester: number;
  type: string;
  credits: number;
  status: string;
  icon: string;
  iconClass: string;
}

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {

  searchText = '';

  selectedDepartment = 'All Departments';
  selectedCourse = 'All Courses';
  selectedSemester = 'All Semesters';
  selectedType = 'All Type';


  subjects: Subject[] = [

    {
      id: 1,
      name: 'Data Structures',
      code: 'CS301',
      department: 'Computer Science',
      course: 'BCA',
      semester: 3,
      type: 'Core',
      credits: 4,
      status: 'Active',
      icon: '▣',
      iconClass: 'computer'
    },

    {
      id: 2,
      name: 'Web Development',
      code: 'CS302',
      department: 'Computer Science',
      course: 'BCA',
      semester: 3,
      type: 'Core',
      credits: 4,
      status: 'Active',
      icon: '</>',
      iconClass: 'web'
    },

    {
      id: 3,
      name: 'Database Management',
      code: 'CS303',
      department: 'Computer Science',
      course: 'BCA',
      semester: 3,
      type: 'Core',
      credits: 4,
      status: 'Active',
      icon: '▤',
      iconClass: 'database'
    },

    {
      id: 4,
      name: 'Operating Systems',
      code: 'CS304',
      department: 'Computer Science',
      course: 'BCA',
      semester: 3,
      type: 'Core',
      credits: 4,
      status: 'Active',
      icon: '▣',
      iconClass: 'os'
    },

    {
      id: 5,
      name: 'Software Engineering',
      code: 'IT401',
      department: 'Information Technology',
      course: 'BCA',
      semester: 4,
      type: 'Core',
      credits: 4,
      status: 'Active',
      icon: '⚙',
      iconClass: 'software'
    },

    {
      id: 6,
      name: 'Digital Marketing',
      code: 'COM201',
      department: 'Commerce',
      course: 'B.Com',
      semester: 2,
      type: 'Elective',
      credits: 3,
      status: 'Active',
      icon: '📢',
      iconClass: 'marketing'
    },

    {
      id: 7,
      name: 'Artificial Intelligence',
      code: 'CS501',
      department: 'Computer Science',
      course: 'MCA',
      semester: 5,
      type: 'Elective',
      credits: 4,
      status: 'Active',
      icon: '🧠',
      iconClass: 'ai'
    },

    {
      id: 8,
      name: 'Cloud Computing',
      code: 'IT502',
      department: 'Information Technology',
      course: 'MCA',
      semester: 5,
      type: 'Elective',
      credits: 4,
      status: 'Active',
      icon: '☁',
      iconClass: 'cloud'
    },

    {
      id: 9,
      name: 'Computer Networks',
      code: 'CS305',
      department: 'Computer Science',
      course: 'BCA',
      semester: 3,
      type: 'Core',
      credits: 4,
      status: 'Inactive',
      icon: '👥',
      iconClass: 'network'
    },

    {
      id: 10,
      name: 'Cyber Security',
      code: 'CS503',
      department: 'Computer Science',
      course: 'MCA',
      semester: 5,
      type: 'Elective',
      credits: 4,
      status: 'Active',
      icon: '🛡',
      iconClass: 'security'
    }

  ];


  filteredSubjects: Subject[] = [...this.subjects];


  filterSubjects(): void {

    const search = this.searchText.toLowerCase().trim();

    this.filteredSubjects = this.subjects.filter(subject => {

      const matchesSearch =
        !search ||
        subject.name.toLowerCase().includes(search) ||
        subject.code.toLowerCase().includes(search) ||
        subject.department.toLowerCase().includes(search);

      const matchesDepartment =
        this.selectedDepartment === 'All Departments' ||
        subject.department === this.selectedDepartment;

      const matchesCourse =
        this.selectedCourse === 'All Courses' ||
        subject.course === this.selectedCourse;

      const matchesSemester =
        this.selectedSemester === 'All Semesters' ||
        subject.semester.toString() === this.selectedSemester;

      const matchesType =
        this.selectedType === 'All Type' ||
        subject.type === this.selectedType;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesCourse &&
        matchesSemester &&
        matchesType
      );

    });

  }


  resetFilters(): void {

    this.searchText = '';

    this.selectedDepartment = 'All Departments';
    this.selectedCourse = 'All Courses';
    this.selectedSemester = 'All Semesters';
    this.selectedType = 'All Type';

    this.filteredSubjects = [...this.subjects];

  }


  addSubject(): void {
    console.log('Add Subject clicked');
  }


  viewSubject(subject: Subject): void {
    console.log('View Subject:', subject);
  }


  editSubject(subject: Subject): void {
    console.log('Edit Subject:', subject);
  }


  deleteSubject(subject: Subject): void {

    const confirmed = confirm(
      `Are you sure you want to delete ${subject.name}?`
    );

    if (!confirmed) {
      return;
    }

    this.subjects = this.subjects.filter(
      item => item.id !== subject.id
    );

    this.filterSubjects();

  }

}