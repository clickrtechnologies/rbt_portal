import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-set-rbt',
  templateUrl: './set-rbt.component.html',
  styleUrls: ['./set-rbt.component.scss']
})
export class SetRbtComponent implements OnInit {

  song: any;

  audio!: HTMLAudioElement;

  isPlaying = false;
  isRepeat = false;
  isShuffle = false;
  isFavorite = false;

  currentTime = 0;
  duration = 0;

  // temporary song list
  songs = [
    { name: 'Taki Taki', artist: 'DJ Snake', file: 'assets/songs/sample.mp3' },
    { name: 'Perfect', artist: 'Ed Sheeran', file: 'assets/songs/sample.mp3' },
    { name: 'Believer', artist: 'Imagine Dragons', file: 'assets/songs/sample.mp3' }
  ];

  currentIndex = 0;

  constructor(private location: Location) {}

  ngOnInit(): void {

    this.song = history.state.song;

    if (this.song) {
      this.currentIndex =
        this.songs.findIndex(s => s.name === this.song.name);

      this.loadSong();
    }
  }

  loadSong() {

    if (this.audio) {
      this.audio.pause();
    }

    this.song = this.songs[this.currentIndex];

    this.audio = new Audio(this.song.file);

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });

    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
    });

    this.audio.addEventListener('ended', () => {
      if (this.isRepeat) {
        this.play();
      } else {
        this.nextSong();
      }
    });

    this.play();
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  nextSong() {

    if (this.isShuffle) {
      this.currentIndex =
        Math.floor(Math.random() * this.songs.length);
    } else {
      this.currentIndex =
        (this.currentIndex + 1) % this.songs.length;
    }

    this.loadSong();
  }

  prevSong() {

    this.currentIndex =
      (this.currentIndex - 1 + this.songs.length) %
      this.songs.length;

    this.loadSong();
  }

  seek(event: any) {
    this.audio.currentTime = event.target.value;
    this.currentTime = event.target.value;
  }

  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  goBack() {
    this.audio.pause();
    this.location.back();
  }

  formatTime(seconds: number): string {

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }
}