import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailOrUsername: string = '';
  password: string = '';
  rememberMe: boolean = false;

  errorMessage: string = '';

  constructor(private router: Router) {}

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  login(): void {

  const registeredUser = localStorage.getItem('campusIQUser');

  if (!registeredUser) {
    alert('Please register first.');
    return;
  }

  const user = JSON.parse(registeredUser);

 if (
  (this.emailOrUsername === user.email ||
   this.emailOrUsername === user.name) &&
  this.password === user.password
) {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('loggedInUser', JSON.stringify(user));

  this.router.navigate(['/student-dashboard']);
} else {

    alert('Invalid email or password.');

  }
}
}