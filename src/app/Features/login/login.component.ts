import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mobileNumber: string = '';
  countryCode: string = '+227';

  countries = [
  { name: 'Niger', code: '+227', flag: '🇳🇪' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' }
];

  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  generatedOtp: string = '';

  otpSent: boolean = false;
  otpRetryCount = 0;
  maxOtpRetry = 3;

  canResendOtp = false;
  resendTimer = 30;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  allowOnlyNumbers(event: KeyboardEvent) {
    const key = event.key;

    if (
      key === 'Backspace' ||
      key === 'Tab' ||
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'Delete'
    ) {
      return;
    }

    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }
  }

  onMobileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mobileNumber = input.value.replace(/[^0-9]/g, '');
  }

  moveNext(event: any, nextInput: any, box: string) {
    const value = event.target.value.replace(/[^0-9]/g, '');

    switch (box) {
      case '1': this.otp1 = value; break;
      case '2': this.otp2 = value; break;
      case '3': this.otp3 = value; break;
      case '4': this.otp4 = value; break;
    }

    if (value.length === 1 && nextInput) {
      setTimeout(() => nextInput.focus(), 50);
    }
  }

  movePrev(event: KeyboardEvent, prevInput: any) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && input.value === '') {
      prevInput?.focus();
    }
  }

  sendOtp() {

    console.log("SEND OTP FUNCTION CALLED");

    if (!this.mobileNumber) {
      return;
    }

    const loginPayload = {
      mobileNumber: this.mobileNumber,
      countryCode: this.countryCode
    };

    console.log("Login Payload =", loginPayload);

    this.userService.login(loginPayload).subscribe({

      next: (loginRes: any) => {

        console.log("LOGIN API SUCCESS =", loginRes);

        const msisdn = Number(this.mobileNumber);

        const otpPayload = {
          msisdn: msisdn,
          countryCode: this.countryCode
        };

        console.log("OTP Payload =", otpPayload);

        this.userService.sendOtp(otpPayload).subscribe({

          next: (otpRes: any) => {

            console.log("OTP Response", otpRes);

            this.generatedOtp = otpRes.otp.toString();

            console.log("Generated OTP Stored =", this.generatedOtp);

            this.otpSent = true;

            alert(otpRes.message);

            this.startResendTimer();
          },

          error: (err: any) => {
            alert("Send OTP API Failed");
            console.log(err);
          }

        });
      },

      error: (err: any) => {
        alert("Login API Failed");
        console.log(err);
      }

    });
  }

  verifyOtp() {

    if (this.otpRetryCount >= this.maxOtpRetry) {
      alert("Maximum OTP attempts exceeded");
      return;
    }
    const enteredOtp =
      this.otp1 + this.otp2 + this.otp3 + this.otp4;

    console.log("Entered OTP =", enteredOtp);
    console.log("Generated OTP =", this.generatedOtp);

    if (enteredOtp.length < 4) {
      alert("Enter complete OTP");
      return;
    }
    const verifyPayload = {
      mobileNumber: this.mobileNumber,
      countryCode: this.countryCode,
      otp: Number(enteredOtp)
    };

    console.log("Verify Payload =", verifyPayload);

    this.userService.login(verifyPayload).subscribe({

      next: (res: any) => {

        console.log("VERIFY API SUCCESS =", res);

        alert("OTP Verified Successfully");

        localStorage.setItem('auth', 'true');

        const finalMsisdn = this.mobileNumber;

        localStorage.setItem("msisdn", finalMsisdn);

        localStorage.setItem(
          "countryCode",
          this.countryCode.replace('+', '')
        );

        console.log("NAVIGATING NOW");

        this.router.navigate(['/music'], {
          state: { msisdn: finalMsisdn }
        })
        .then(() => {
          console.log("NAVIGATION SUCCESS");
        })
        .catch((err) => {
          console.log("NAVIGATION FAILED", err);
        });
      },

      error: (err: any) => {

        this.otpRetryCount++;

        alert("Backend OTP Verification Failed");

        console.log("VERIFY API ERROR =", err);
      }

    });
  }
  startResendTimer() {
    this.canResendOtp = false;
    this.resendTimer = 30;

    const interval = setInterval(() => {
      this.resendTimer--;

      if (this.resendTimer <= 0) {
        clearInterval(interval);
        this.canResendOtp = true;
      }
    }, 1000);
  }
  resendOtp() {
    if (!this.canResendOtp) {
      alert("Please wait before resending OTP");
      return;
    }
    this.sendOtp();
    this.otp1 = '';
    this.otp2 = '';
    this.otp3 = '';
    this.otp4 = '';
  }
  editNumber() {
    this.otpSent = false;
    this.otp1 = '';
    this.otp2 = '';
    this.otp3 = '';
    this.otp4 = '';
  }
}