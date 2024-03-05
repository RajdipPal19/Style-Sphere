import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  logout() {
    // Implement logout logic, e.g., clear authentication token or session
    // After logging out, navigate the user to the login page
    // For example, you can clear the token and then redirect to the login page
    // Clear authentication token: localStorage.removeItem('token');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
