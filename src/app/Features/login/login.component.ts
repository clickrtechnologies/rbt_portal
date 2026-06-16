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
  otp: string = '';

  otpSent: boolean = false;

  constructor(private router: Router) {}


  // STEP 1 → SEND OTP

  sendOtp() {

    if (!this.mobileNumber || this.mobileNumber.length !== 10) {
      alert('Please enter valid mobile number');
      return;
    }

    // simulate OTP sending

    this.otpSent = true;

    alert('OTP Sent Successfully');
  }


  // STEP 2 → VERIFY OTP
  
  verifyOtp() {

  if (this.otp === '1234') {

    alert('Login Successful');

    // EXISTING USER LOGIC (dummy rule)
    const isExistingUser = this.mobileNumber === '9999999999';

    this.router.navigate(['/music'], {
      state: {
        isExistingUser: isExistingUser
      }
    });

  } else {
    alert('Invalid OTP');
  }

}
}