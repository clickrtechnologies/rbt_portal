import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SongService {


private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private songs = [
    { name: 'Taki Taki', artist: 'DJ Snake', file: 'assets/songs/sample.mp3' },
    { name: 'Perfect', artist: 'Ed Sheeran', file: 'assets/songs/sample.mp3' },
    { name: 'Believer', artist: 'Imagine Dragons', file: 'assets/songs/sample.mp3' }
  ];


  getSongs() {
    return this.songs;
  }
  getToneCatalogue(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/tone-catalogue`
    );
  }

  searchTone(keyword: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/tones/search?keyword=${keyword}`
    );
  }
}