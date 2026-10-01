import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  adminName = 'Campus Administrator';
  adminRole = 'System Administrator';
  adminDepartment = 'Campus Administration';
  adminId = 'ADM-001';
  adminEmail = 'admin@campusiq.edu';

  totalUsers = 1248;
  departments = 12;
  courses = 42;
  subjects = 156;
  adminActivities = 8;

  constructor() {}

  editProfile(): void {
    alert('Edit Profile clicked');
  }

  changePassword(): void {
    alert('Change Password clicked');
  }

  twoFactorAuthentication(): void {
    alert('Two-Factor Authentication clicked');
  }

  notificationPreferences(): void {
    alert('Notification Preferences clicked');
  }

  privacySettings(): void {
    alert('Privacy Settings clicked');
  }

}