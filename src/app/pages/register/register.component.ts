import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  selectedRole: string = 'Student';

  fullName: string = '';
  enrollment: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmPassword: string = '';

  agreeTerms: boolean = true;
  receiveUpdates: boolean = false;

  constructor(private router: Router) {}

  selectRole(role: string): void {
    this.selectedRole = role;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  createAccount(): void {

    // Required fields validation
    if (
      !this.fullName ||
      !this.enrollment ||
      !this.email ||
      !this.mobile ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please fill all required fields.');
      return;
    }

    // Terms validation
    if (!this.agreeTerms) {
      alert('Please agree to the Terms and Conditions.');
      return;
    }

    // Password validation
    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }

    // Password length
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // Create user object
    const user = {
      role: this.selectedRole,
      fullName: this.fullName,
      enrollment: this.enrollment,
      email: this.email,
      mobile: this.mobile,
      password: this.password,
      receiveUpdates: this.receiveUpdates
    };

    // Save registration data
    localStorage.setItem('campusIQUser', JSON.stringify(user));

    alert('Account created successfully!');

    // Go to login
    this.router.navigate(['/login']);
  }

}