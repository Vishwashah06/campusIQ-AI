import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {

  // =====================================================
  // PROFILE PHOTO
  // =====================================================

  profileImage = '';

  uploadPhoto(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    // Check image type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      input.value = '';
      return;
    }

    // Maximum 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB.');
      input.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.profileImage = reader.result as string;
    };

    reader.readAsDataURL(file);
  }


  // =====================================================
  // PROFILE EDIT
  // =====================================================

  showEditProfile = false;

  studentName = 'Vishh';
  studentEmail = 'vishh@college.edu';
  studentMobile = '+91 98765 43210';
  studentAddress = 'Surat, Gujarat, India';

  editName = '';
  editEmail = '';
  editMobile = '';
  editAddress = '';

  openEditProfile(): void {

    this.editName = this.studentName;
    this.editEmail = this.studentEmail;
    this.editMobile = this.studentMobile;
    this.editAddress = this.studentAddress;

    this.showEditProfile = true;
  }

  closeEditProfile(): void {
    this.showEditProfile = false;
  }

  saveProfile(): void {

    this.studentName = this.editName;
    this.studentEmail = this.editEmail;
    this.studentMobile = this.editMobile;
    this.studentAddress = this.editAddress;

    this.showEditProfile = false;
  }


  // =====================================================
  // ACADEMIC EDIT
  // =====================================================

  showEditAcademic = false;

  department = 'Computer Engineering';
  program = 'IMCA';
  currentYear = '4th Year (Semester 7)';
  enrollmentNo = '1155';
  batch = '2022 – 2026';
  currentCgpa = '8.6 / 10';

  editDepartment = '';
  editProgram = '';
  editCurrentYear = '';
  editEnrollmentNo = '';
  editBatch = '';
  editCgpa = '';

  openEditAcademic(): void {

    this.editDepartment = this.department;
    this.editProgram = this.program;
    this.editCurrentYear = this.currentYear;
    this.editEnrollmentNo = this.enrollmentNo;
    this.editBatch = this.batch;
    this.editCgpa = this.currentCgpa;

    this.showEditAcademic = true;
  }

  closeEditAcademic(): void {
    this.showEditAcademic = false;
  }

  saveAcademic(): void {

    this.department = this.editDepartment;
    this.program = this.editProgram;
    this.currentYear = this.editCurrentYear;
    this.enrollmentNo = this.editEnrollmentNo;
    this.batch = this.editBatch;
    this.currentCgpa = this.editCgpa;

    this.showEditAcademic = false;
  }


  // =====================================================
  // CONTACT & LINKS EDIT
  // =====================================================

  showEditContact = false;

  linkedin = '';
  github = '';
  portfolio = '';

  editLinkedin = '';
  editGithub = '';
  editPortfolio = '';

  openEditContact(): void {

    this.editLinkedin = this.linkedin;
    this.editGithub = this.github;
    this.editPortfolio = this.portfolio;

    this.showEditContact = true;
  }

  closeEditContact(): void {
    this.showEditContact = false;
  }

  saveContact(): void {

    this.linkedin = this.editLinkedin;
    this.github = this.editGithub;
    this.portfolio = this.editPortfolio;

    this.showEditContact = false;
  }


  // =====================================================
  // ABOUT ME EDIT
  // =====================================================

  showEditAbout = false;

  aboutMe =
    'A motivated and curious student passionate about technology, problem-solving, and continuous learning. I enjoy building projects, exploring new tools, and improving my skills to contribute to innovative solutions.';

  editAboutMe = '';

  openEditAbout(): void {

    this.editAboutMe = this.aboutMe;

    this.showEditAbout = true;
  }

  closeEditAbout(): void {
    this.showEditAbout = false;
  }

  saveAbout(): void {

    this.aboutMe = this.editAboutMe;

    this.showEditAbout = false;
  }


  // =====================================================
  // INTERESTS EDIT
  // =====================================================

  showEditInterests = false;

  interests: string[] = [
    'Web Development',
    'Artificial Intelligence',
    'Competitive Programming',
    'UI/UX Design',
    'Open Source',
    'Tech Blogs',
    'Cricket',
    'Music'
  ];

  editInterests = '';

  openEditInterests(): void {

    this.editInterests = this.interests.join(', ');

    this.showEditInterests = true;
  }

  closeEditInterests(): void {
    this.showEditInterests = false;
  }

  saveInterests(): void {

    this.interests = this.editInterests
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    this.showEditInterests = false;
  }

}