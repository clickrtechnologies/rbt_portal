import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RbtService {

  // Spring Boot backend URL
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // local state sharing
  private rbtSubject = new BehaviorSubject<any>(null);

  rbt$ = this.rbtSubject.asObservable();

  // RESTORED OLD METHOD NAME
  setRbt(data: any) {
    this.rbtSubject.next(data);
  }

  // Backend API → Save subscription
  activateRbt(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/subscription/set-rbt`,
      data
    );
  }

  // Backend API → Check existing user
  getUser(msisdn: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/api/subscription/user/${msisdn}`
    );
  }
}