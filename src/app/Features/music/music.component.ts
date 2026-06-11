import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {

categories = [
  {
    key: 'party',
    title: 'Party Music',
    icon: '🎉',
    songs: [
      { name: 'Taki Taki', artist: 'DJ Snake' },
      { name: 'In Da Club', artist: '50 Cent' },
      { name: 'Turn Down for What', artist: 'DJ Snake' },
    
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
      
    ]
  }
];

}