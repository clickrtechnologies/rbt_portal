import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RbtService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private rbtSubject = new BehaviorSubject<any>(null);
  rbt$ = this.rbtSubject.asObservable();

  setRbt(data: any) {
    this.rbtSubject.next(data);
  }

  // POST API
  activateRbt(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/subscription/set-rbt`,
      data
    );
  }

  // Existing user API
  getUser(msisdn: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/api/subscription/user/${msisdn}`
    );
  }

  // Fetch tone catalog API
  getToneCatalog(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/api/tone-catalogue`
    );
  }

  // Search API
  searchTone(keyword: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/api/tones/search?keyword=${keyword}`
    );
  }
}