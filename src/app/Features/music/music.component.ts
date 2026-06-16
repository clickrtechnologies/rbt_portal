import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {

  constructor(private router: Router) {}

  // SINGLE FUNCTION FOR BOTH PLAY + SET RBT
  openPlayer(song: any) {
    this.router.navigate(['/set-rbt'], {
      state: { song: song }
    });
  }

  categories = [
    {
      key: 'party',
      title: 'Party Music',
      icon: '🎉',
      songs: [
        { name: 'Taki Taki', artist: 'DJ Snake' },
        { name: 'In Da Club', artist: '50 Cent' },
        { name: 'Turn Down for What', artist: 'DJ Snake' }
      ]
    },
    {
      key: 'love',
      title: 'Love Music',
      icon: '❤️',
      songs: [
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'All of Me', artist: 'John Legend' },
        { name: 'Thinking Out Loud', artist: 'Ed Sheeran' }
      ]
    },
    {
      key: 'sad',
      title: 'Sad Songs',
      icon: '💔',
      songs: [
        { name: 'Someone Like You', artist: 'Adele' },
        { name: 'Let Her Go', artist: 'Passenger' },
        { name: 'Fix You', artist: 'Coldplay' }
      ]
    },
    {
      key: 'emotional',
      title: 'Emotional Songs',
      icon: '😢',
      songs: [
        { name: 'The Night We Met', artist: 'Lord Huron' },
        { name: 'Say Something', artist: 'A Great Big World' },
        { name: 'Photograph', artist: 'Ed Sheeran' }
      ]
    },
    {
      key: 'bhakti',
      title: 'Bhakti Songs',
      icon: '🙏',
      songs: [
        { name: 'Hanuman Chalisa', artist: 'Hariharan' },
        { name: 'Om Jai Jagdish Hare', artist: 'Aarti Singer' },
        { name: 'Shree Ram Jay Ram', artist: 'Anuradha Paudwal' }
      ]
    },
    {
      key: 'trending',
      title: 'Trending Songs',
      icon: '🔥',
      songs: [
        { name: 'Blinding Lights', artist: 'The Weeknd' },
        { name: 'Shape of You', artist: 'Ed Sheeran' },
        { name: 'Despacito', artist: 'Luis Fonsi' }
      ]
    },
    {
      key: 'motivational',
      title: 'Motivational Songs',
      songs: [
        { name: 'Hall of Fame', artist: 'The Script' },
        { name: 'Believer', artist: 'Imagine Dragons' },
        { name: 'Stronger', artist: 'Kanye West' }
      ]
    },
    {
      key: 'friendship',
      title: 'Friendship Songs',
      songs: [
        { name: 'Count on Me', artist: 'Bruno Mars' },
        { name: 'Lean on Me', artist: 'Bill Withers' },
        { name: 'Best Friend', artist: 'Saweetie' }
      ]
    },
    {
      key: 'anniversary',
      title: 'Anniversary Songs',
      songs: [
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'A Thousand Years', artist: 'Christina Perri' },
        { name: 'Marry You', artist: 'Bruno Mars' }
      ]
    },
    {
      key: 'birthday',
      title: 'Birthday Songs',
      songs: [
        { name: 'Birthday', artist: 'Katy Perry' },
        { name: 'In Da Club', artist: '50 Cent' },
        { name: 'Birthday Cake', artist: 'Rihanna' }
      ]
    },
    {
      key: 'latest',
      title: 'Latest Songs',
      icon: '🆕',
      songs: [
        { name: 'Calm Down', artist: 'Rema' },
        { name: 'Cruel Summer', artist: 'Taylor Swift' },
        { name: 'Kill Bill', artist: 'SZA' }
      ]
    }
  ];

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

  goToMusic() {
    alert("Music clicked");
  }

  goToTopSongs() {
    alert("Top Songs clicked");
  }

  goToFavorites() {
    alert("Favorites clicked");
  }

  goToSetRbt() {
    alert("Set RBT clicked");
  }
}