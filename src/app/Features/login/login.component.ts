import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  mobileNumber: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.mobileNumber) {
      this.router.navigate(['/music']);
    } else {
      alert('Please enter mobile number');
    }
  }

}