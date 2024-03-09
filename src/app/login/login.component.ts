import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { } 
  onSubmit() {//I didn't use authentiaction, thats why it is true always
    if (true) {//this.userData.username === 'raj' && this.userData.password === 'dip'
      console.log('Login successful');
      alert("Login successfully")
      this.router.navigate(['/home']);
    } else {
      alert("Check your Username and Password");
      console.error('Login failed');
    }
  }
}
