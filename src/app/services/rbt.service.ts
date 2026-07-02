import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RbtService {

  constructor(private http: HttpClient) {}

  private rbtSubject = new BehaviorSubject<any>(null);
  rbt$ = this.rbtSubject.asObservable();

  setRbt(data: any) {
    this.rbtSubject.next(data);
  }
  private apiUrl = environment.apiUrl;

 activateRbt(data: any): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/api/subscription/activate`,
    data
  );
}

  getUser(msisdn: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/subscription/user/${msisdn}`
    );
  }

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
 

  getToneCatalog(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/tone-catalogue`
    );
  }

  getGroupedToneCatalog() {
 return this.http.get(
  `${this.apiUrl}/api/tone-catalogue/grouped`
 );
}
 
searchTone(keyword: string): Observable<any> {
  return this.http.get(
    `${this.apiUrl}/api/tone-catalogue/search?keyword=${keyword}`
  );
}


  getCategoryCount() {
  return this.http.get<any[]>(
    `${this.apiUrl}/api/tone-catalogue/category-count`
  );
}
}