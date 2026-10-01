import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  initials: string;
  name: string;
  email: string;
  role: 'Student' | 'Faculty' | 'Admin';
  department: string;
  status: 'Active' | 'Inactive';
  joinedOn: string;
  color: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  searchText = '';
  selectedRole = 'All Roles';
  selectedDepartment = 'All Departments';
  selectedStatus = 'All Status';

  currentPage = 1;
  itemsPerPage = 10;

  users: User[] = [

    {
      id: 1,
      initials: 'AS',
      name: 'Aarav Shah',
      email: 'aarav.shah@campusiq.edu',
      role: 'Student',
      department: 'Computer Science',
      status: 'Active',
      joinedOn: '01 Aug 2025',
      color: 'purple'
    },

    {
      id: 2,
      initials: 'KP',
      name: 'Kavya Patel',
      email: 'kavya.patel@campusiq.edu',
      role: 'Student',
      department: 'Information Technology',
      status: 'Active',
      joinedOn: '02 Aug 2025',
      color: 'pink'
    },

    {
      id: 3,
      initials: 'RS',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@campusiq.edu',
      role: 'Faculty',
      department: 'Management',
      status: 'Active',
      joinedOn: '15 Jul 2025',
      color: 'green'
    },

    {
      id: 4,
      initials: 'NP',
      name: 'Neha Panchal',
      email: 'neha.panchal@campusiq.edu',
      role: 'Student',
      department: 'Commerce',
      status: 'Active',
      joinedOn: '10 Aug 2025',
      color: 'blue'
    },

    {
      id: 5,
      initials: 'MT',
      name: 'Mahesh Trivedi',
      email: 'mahesh.trivedi@campusiq.edu',
      role: 'Faculty',
      department: 'Computer Science',
      status: 'Active',
      joinedOn: '21 Jul 2025',
      color: 'pink'
    },

    {
      id: 6,
      initials: 'VP',
      name: 'Vishal Parmar',
      email: 'vishal.parmar@campusiq.edu',
      role: 'Student',
      department: 'Information Technology',
      status: 'Inactive',
      joinedOn: '18 Jun 2025',
      color: 'purple'
    },

    {
      id: 7,
      initials: 'PR',
      name: 'Pooja Rathi',
      email: 'pooja.rathi@campusiq.edu',
      role: 'Student',
      department: 'Management',
      status: 'Active',
      joinedOn: '05 Aug 2025',
      color: 'green'
    },

    {
      id: 8,
      initials: 'SK',
      name: 'Sanjay Kulkarni',
      email: 'sanjay.kulkarni@campusiq.edu',
      role: 'Admin',
      department: 'Administration',
      status: 'Active',
      joinedOn: '12 Jul 2025',
      color: 'blue'
    },

    {
      id: 9,
      initials: 'DM',
      name: 'Disha Mehta',
      email: 'disha.mehta@campusiq.edu',
      role: 'Faculty',
      department: 'Commerce',
      status: 'Active',
      joinedOn: '27 Jul 2025',
      color: 'orange'
    },

    {
      id: 10,
      initials: 'AR',
      name: 'Amit Raval',
      email: 'amit.raval@campusiq.edu',
      role: 'Student',
      department: 'Computer Science',
      status: 'Active',
      joinedOn: '30 Aug 2025',
      color: 'pink'
    },

    {
      id: 11,
      initials: 'JD',
      name: 'Jignesh Desai',
      email: 'jignesh.desai@campusiq.edu',
      role: 'Student',
      department: 'Computer Science',
      status: 'Active',
      joinedOn: '01 Sep 2025',
      color: 'blue'
    },

    {
      id: 12,
      initials: 'PM',
      name: 'Priya Mehta',
      email: 'priya.mehta@campusiq.edu',
      role: 'Faculty',
      department: 'Management',
      status: 'Active',
      joinedOn: '03 Aug 2025',
      color: 'green'
    }
  ];

  get filteredUsers(): User[] {

    const search = this.searchText.toLowerCase().trim();

    return this.users.filter(user => {

      const matchesSearch =
        !search ||
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search);

      const matchesRole =
        this.selectedRole === 'All Roles' ||
        user.role === this.selectedRole;

      const matchesDepartment =
        this.selectedDepartment === 'All Departments' ||
        user.department === this.selectedDepartment;

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        user.status === this.selectedStatus;

      return (
        matchesSearch &&
        matchesRole &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }

  get totalUsers(): number {
    return 1248;
  }

  get totalStudents(): number {
    return 1108;
  }

  get totalFaculty(): number {
    return 86;
  }

  get totalAdmin(): number {
    return 32;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  get paginatedUsers(): User[] {

    const start =
      (this.currentPage - 1) * this.itemsPerPage;

    const end =
      start + this.itemsPerPage;

    return this.filteredUsers.slice(start, end);
  }

  get showingFrom(): number {

    if (this.filteredUsers.length === 0) {
      return 0;
    }

    return ((this.currentPage - 1) * this.itemsPerPage) + 1;
  }

  get showingTo(): number {

    if (this.filteredUsers.length === 0) {
      return 0;
    }

    return Math.min(
      this.currentPage * this.itemsPerPage,
      this.filteredUsers.length
    );
  }

  get pageNumbers(): number[] {

    const pages: number[] = [];

    const total = this.totalPages;

    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }

    return pages;
  }

  changePage(page: number): void {

    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
  }

  previousPage(): void {

    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  firstPage(): void {
    this.currentPage = 1;
  }

  lastPage(): void {
    this.currentPage = this.totalPages;
  }

  resetFilters(): void {

    this.searchText = '';
    this.selectedRole = 'All Roles';
    this.selectedDepartment = 'All Departments';
    this.selectedStatus = 'All Status';
    this.currentPage = 1;
  }

  onFilterChange(): void {
    this.currentPage = 1;
  }

  viewUser(user: User): void {
    console.log('View user:', user);
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
  }

  deleteUser(user: User): void {

    const confirmDelete =
      confirm(`Are you sure you want to delete ${user.name}?`);

    if (!confirmDelete) {
      return;
    }

    const index =
      this.users.findIndex(u => u.id === user.id);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  addNewUser(): void {
    console.log('Add new user clicked');
  }
}