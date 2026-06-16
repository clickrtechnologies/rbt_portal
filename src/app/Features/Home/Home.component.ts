import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RbtDialogComponent } from '../rbt-dialog/rbt-dialog.component';
import { RbtService } from '../../services/rbt.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './Home.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {

  isExistingUser: boolean = false;

  existingRbt = {
    name: 'Believer',
    plan: 'Monthly',
    validity: '25 Days Left'
  };

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private rbtService: RbtService   // ✅ FIX
  ) {
    const nav = this.router.getCurrentNavigation();

    this.isExistingUser =
      nav?.extras?.state?.['isExistingUser'] || false;
  }

  // ================= OPEN POPUP =================

  openPlayer(song: any) {
    this.dialog.open(RbtDialogComponent, {
      width: '420px',
      maxWidth: '90vw',
      panelClass: 'spotify-dialog',
      backdropClass: 'spotify-backdrop',
      disableClose: false,
      data: song
    });
  }

  // ================= SONG DATA =================

  categories = [
    {
      key: 'party',
      title: 'Party Music',
      icon: '🎉',
      songs: [
        { name: 'Taki Taki', artist: 'DJ Snake' },
        { name: 'In Da Club', artist: '50 Cent' },
        { name: 'Turn Down for What', artist: 'DJ Snake' },
       { name: 'Uptown Funk', artist: 'Bruno Mars' },
      { name: 'Party Rock Anthem', artist: 'LMFAO' },
      { name: 'Titanium', artist: 'David Guetta' }
      ]
    },
    {
      key: 'love',
      title: 'Love Music',
      icon: '❤️',
      songs: [
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'All of Me', artist: 'John Legend' },
        { name: 'Thinking Out Loud', artist: 'Ed Sheeran' },
        { name: 'Photograph', artist: 'Ed Sheeran' },
      { name: 'Until I Found You', artist: 'Stephen Sanchez' },
      { name: 'I Will Always Love You', artist: 'Whitney Houston' }
      ]
    },
    {
      key: 'sad',
      title: 'Sad Songs',
      icon: '💔',
      songs: [
        { name: 'Someone Like You', artist: 'Adele' },
        { name: 'Let Her Go', artist: 'Passenger' },
        { name: 'Fix You', artist: 'Coldplay' },
        { name: 'Hurt', artist: 'Johnny Cash' },
      { name: 'Stay With Me', artist: 'Sam Smith' },
      { name: 'When I Was Your Man', artist: 'Bruno Mars' }
      ]
    },
    {
      key: 'emotional',
      title: 'Emotional Songs',
      icon: '😢',
      songs: [
        { name: 'The Night We Met', artist: 'Lord Huron' },
        { name: 'Say Something', artist: 'A Great Big World' },
        { name: 'Photograph', artist: 'Ed Sheeran' },
        { name: 'Someone You Loved', artist: 'Lewis Capaldi' },
      { name: 'Let Me Down Slowly', artist: 'Alec Benjamin' },
      { name: 'Ocean Eyes', artist: 'Billie Eilish' }
      ]
    },
    {
      key: 'bhakti',
      title: 'Bhakti Songs',
      icon: '🙏',
      songs: [
        { name: 'Hanuman Chalisa', artist: 'Hariharan' },
        { name: 'Om Jai Jagdish Hare', artist: 'Aarti Singer' },
        { name: 'Shree Ram Jay Ram', artist: 'Anuradha Paudwal' },
        { name: 'Mera Aapki Kripa Se', artist: 'Various' },
      { name: 'Achyutam Keshavam', artist: 'Krishna Bhajan' },
      { name: 'Govind Bolo Hari Gopal Bolo', artist: 'Bhajan Singer' }
      ]
    },
    {
      key: 'trending',
      title: 'Trending Songs',
      icon: '🔥',
      songs: [
        { name: 'Blinding Lights', artist: 'The Weeknd' },
        { name: 'Shape of You', artist: 'Ed Sheeran' },
        { name: 'Despacito', artist: 'Luis Fonsi' },
          { name: 'Calm Down', artist: 'Rema' },
      { name: 'As It Was', artist: 'Harry Styles' },
      { name: 'Flowers', artist: 'Miley Cyrus' }
      ]
    },
    {
      key: 'motivational',
      title: 'Motivational Songs',
      songs: [
        { name: 'Hall of Fame', artist: 'The Script' },
        { name: 'Believer', artist: 'Imagine Dragons' },
        { name: 'Stronger', artist: 'Kanye West' },
          { name: 'Eye of the Tiger', artist: 'Survivor' },
      { name: 'Lose Yourself', artist: 'Eminem' },
      { name: 'Unstoppable', artist: 'Sia' }
    ]
      
    },
    {
      key: 'friendship',
      title: 'Friendship Songs',
      songs: [
        { name: 'Count on Me', artist: 'Bruno Mars' },
        { name: 'Lean on Me', artist: 'Bill Withers' },
        { name: 'Best Friend', artist: 'Saweetie' },
         { name: 'Yaaron', artist: 'KK' },
      { name: 'Tera Yaar Hoon Main', artist: 'Arijit Singh' },
      { name: 'Illahi', artist: 'Arijit Singh' }

      ]
    },
    {
      key: 'anniversary',
      title: 'Anniversary Songs',
      songs: [
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'A Thousand Years', artist: 'Christina Perri' },
        { name: 'Marry You', artist: 'Bruno Mars' },
         { name: 'All of Me', artist: 'John Legend' },
      { name: 'You Are The Reason', artist: 'Calum Scott' },
      { name: 'Thinking Out Loud', artist: 'Ed Sheeran' }
      ]
    },
    {
      key: 'birthday',
      title: 'Birthday Songs',
      songs: [
        { name: 'Birthday', artist: 'Katy Perry' },
        { name: 'In Da Club', artist: '50 Cent' },
        { name: 'Birthday Cake', artist: 'Rihanna' },
         { name: 'Happy Birthday Song', artist: 'Traditional' },
      { name: 'Celebrate', artist: 'Kool & The Gang' },
      { name: 'Best Day of My Life', artist: 'American Authors' }
    
      ]
    },
    {
      key: 'latest',
      title: 'Latest Songs',
      icon: '🆕',
      songs: [
        { name: 'Calm Down', artist: 'Rema' },
        { name: 'Cruel Summer', artist: 'Taylor Swift' },
        { name: 'Kill Bill', artist: 'SZA' },
          { name: 'Paint The Town Red', artist: 'Doja Cat' },
      { name: 'Seven', artist: 'Jungkook' },
      { name: 'Water', artist: 'Tyla' }
      ]
    }
  ];

  // ICON MAPPING
  getIcon(title: string): string {
    switch (title) {
      case 'Party Music': return 'celebration';
      case 'Love Music': return 'favorite';
      case 'Sad Songs': return 'sentiment_dissatisfied';
      case 'Emotional Songs': return 'healing';
      case 'Bhakti Songs': return 'self_improvement';
      case 'Trending Songs': return 'trending_up';
      case 'Latest Songs': return 'new_releases';
      case 'Motivational Songs': return 'emoji_events';
      case 'Friendship Songs': return 'groups';
      case 'Anniversary Songs': return 'card_giftcard';
      case 'Birthday Songs': return 'cake';
      default: return 'music_note';
    }
  }

  goToMusic() { alert("Music clicked"); }
  goToTopSongs() { alert("Top Songs clicked"); }
  goToFavorites() { alert("Favorites clicked"); }
  goToSetRbt() { alert("Set RBT clicked"); }
}