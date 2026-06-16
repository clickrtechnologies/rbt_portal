import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RbtService {

  private rbtSubject = new BehaviorSubject<any>(null);

  rbt$ = this.rbtSubject.asObservable();

  setRbt(data: any) {
    this.rbtSubject.next(data);
  }
}