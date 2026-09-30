import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  selectedRole: string = 'Student';

  constructor(private router: Router) {}

  selectRole(role: string) {
    this.selectedRole = role;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}