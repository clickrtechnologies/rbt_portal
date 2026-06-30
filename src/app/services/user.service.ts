import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/api/user/login`,
    data
  );
}

sendOtp(data: any): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/api/user/send-otp`,
    data
  );
}


}