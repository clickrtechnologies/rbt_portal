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

  // ================= VARIABLES =================
  mobileNumber: string = '';

  // OTP BOXES (4 separate)
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  generatedOtp: string = '';

  otpSent: boolean = false;

  otpExpiryTime = 300;      // 5 min
  otpRetryCount = 0;
  maxOtpRetry = 3;

  canResendOtp = false;
  resendTimer = 30;         // 30 sec

  constructor(private router: Router) {}

  // ================= ONLY NUMBERS FOR MSISDN =================
  allowOnlyNumbers(event: any) {

    let value =
      event.target.value.replace(/[^0-9]/g, '');

    // first digit must be 6
    if (value.length === 1 && value !== '6') {
      value = '';
    }

    this.mobileNumber = value;
  }

// auto move next
moveNext(event: any, nextInput: any, box: string) {

  const value = event.target.value.replace(/[^0-9]/g, '');

  switch (box) {
    case '1':
      this.otp1 = value;
      break;
    case '2':
      this.otp2 = value;
      break;
    case '3':
      this.otp3 = value;
      break;
    case '4':
      this.otp4 = value;
      break;
  }

  // move to next box automatically
  if (value.length === 1 && nextInput) {
    nextInput.focus();
  }
}


// move previous on backspace
movePrev(event: KeyboardEvent, prevInput: any) {

  const input = event.target as HTMLInputElement;

  if (event.key === 'Backspace' && input.value === '') {
    if (prevInput) {
      prevInput.focus();
    }
  }
}





  // ================= SEND OTP =================
  sendOtp() {

    if (
      !this.mobileNumber ||
      this.mobileNumber.length < 7 ||
      !this.mobileNumber.startsWith('6')
    ) {
      alert("MSISDN must start with 6 and have minimum 7 digits");
      return;
    }

    // TEMP OTP
    this.generatedOtp = "1234";

    console.log("Generated OTP:", this.generatedOtp);

    this.otpSent = true;

    alert("OTP Sent Successfully");

    this.startOtpExpiryTimer();
    this.startResendTimer();
  }

  // ================= VERIFY OTP =================
  verifyOtp() {

    if (this.otpRetryCount >= this.maxOtpRetry) {
      alert("Maximum OTP attempts exceeded");
      return;
    }

    // combine 4 boxes
    const enteredOtp =
      this.otp1 +
      this.otp2 +
      this.otp3 +
      this.otp4;

    if (enteredOtp === this.generatedOtp) {

      alert("OTP Verified Successfully");

      // redirect
      this.router.navigate(
        ['/music'],
        { state: { msisdn: this.mobileNumber } }
      );

    } else {

      this.otpRetryCount++;

      alert("Invalid OTP");
    }
  }

  // ================= OTP EXPIRY =================
  startOtpExpiryTimer() {

    setTimeout(() => {

      this.generatedOtp = '';

      alert("OTP Expired");

    }, 300000);
  }

  // ================= RESEND TIMER =================
  startResendTimer() {

    this.canResendOtp = false;

    setTimeout(() => {

      this.canResendOtp = true;

    }, 30000);
  }

  // ================= RESEND OTP =================
  resendOtp() {

    if (!this.canResendOtp) {
      alert("Please wait before resending OTP");
      return;
    }

    this.generatedOtp = "1234";

    console.log("New OTP:", this.generatedOtp);

    alert("OTP Resent");

    // clear old boxes
    this.otp1 = '';
    this.otp2 = '';
    this.otp3 = '';
    this.otp4 = '';

    this.startResendTimer();
  }

  // ================= OTP INPUT ONLY NUMBERS =================
  allowOnlyOtpNumbers(event: any, box: string) {

    const value =
      event.target.value.replace(/[^0-9]/g, '');

    switch (box) {
      case '1':
        this.otp1 = value;
        break;
      case '2':
        this.otp2 = value;
        break;
      case '3':
        this.otp3 = value;
        break;
      case '4':
        this.otp4 = value;
        break;
    }
  }

  // ================= EDIT NUMBER =================
  editNumber() {
    this.otpSent = false;

    this.otp1 = '';
    this.otp2 = '';
    this.otp3 = '';
    this.otp4 = '';
  }

}