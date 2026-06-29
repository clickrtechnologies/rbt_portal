import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RbtService } from '../../services/rbt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class MusicComponent implements OnInit {

constructor(private rbtService: RbtService, private router:Router) {}
  isExistingUser = false;
  msisdn: string = '';
existingRbt: { name: string; plan: string; validity: string } | null = null;

userType: 'NEW' | 'EXISTING' = 'NEW';

  selectedSong: any = null;
  selectedPlan: string = '';
  showPopup: boolean = false;
  showProfileMenu = false;
showLogoutPopup = false;

  isSuccess: boolean = false;
  popupMessage: string = '';

groupedSongs: any = {};
searchKeyword: string = '';

goToManageAccount() {
  this.router.navigate(
    ['/manage-account'],
    {
      state: {
        msisdn: this.msisdn  
      }
    }
  );
}

songIcons: string[] = [
  'music_note',
  'queue_music',
  'graphic_eq',
  'album',
  'library_music',
  'headphones'
];

getSongIcon(index: number): string {
  return this.songIcons[index % this.songIcons.length];
}


iconColors: string[] = [
  '#e91e63',   
  '#ff9800',   
  '#2196f3',   
  '#9c27b0',   
  '#4caf50',   
  '#f44336'    
];

getIconColor(index: number): string {
  return this.iconColors[index % this.iconColors.length];
}

toggleProfileMenu() {
  this.showProfileMenu = !this.showProfileMenu;
}

logout() {

  this.showProfileMenu = false;
  localStorage.clear();
    this.router.navigate(['/login']);
}
 @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

isPlaying = false;
progress = 0;
currentTime = '0:00';
duration = '0:00';

  waveBars = Array(30).fill(0);
ngOnInit() {
  const navData = history.state || {};

  this.msisdn =
    navData?.msisdn ||
    localStorage.getItem('msisdn') ||
    '';

  this.fetchToneCatalog();
}

activeRbt: any;

fetchToneCatalog() {
  this.rbtService.getToneCatalog().subscribe({
    next: (data: any) => {
      //console.log("Backend data:", data);

      this.groupedSongs = this.groupByCategory(data);

      console.log("MSISDN sent =", this.msisdn);
      if (this.msisdn) {
        this.checkExistingUser();
        console.log("Current MSISDN =", this.msisdn);
      }
    },

    error: (err: any) => {
       alert("Failed to load songs");
    }
  });
}

checkExistingUser() {
  this.rbtService.getUser(Number(this.msisdn)).subscribe({
    next: (data: any) => {

      console.log("Existing User Response =", data);

      if (data && Object.keys(data).length > 0) {

        this.isExistingUser = true;
        this.userType = 'EXISTING';

        let toneName = 'Active RBT Found';

        // try matching song from catalogue
        for (let category in this.groupedSongs) {

          const song = this.groupedSongs[category].find(
            (s: any) =>
              String(s.toneCode) === String(data.toneCode) ||
              String(s.tone_code) === String(data.toneCode) ||
              String(s.code) === String(data.toneCode)
          );

          if (song) {
            toneName =
              song.toneName ||
              song.tonename ||
              song.name ||
              'Active RBT Found';
            break;
          }
        }

        // ALWAYS SET existingRbt
        this.existingRbt = {
          name: toneName,
          plan: data.packName || 'TSUBM',
          validity: '30 Days Left'
        };

      } else {

        this.isExistingUser = false;
        this.userType = 'NEW';
        this.existingRbt = null;
      }
    },

    error: (err: any) => {

      console.log("Get User API Error =", err);

      this.isExistingUser = false;
      this.userType = 'NEW';
      this.existingRbt = null;
    }
  });
}

        
    
         
groupByCategory(data: any[]) {
  return data.reduce((acc: any, song: any) => {
    const category = song.category || 'OTHER';

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(song);
    return acc;
  }, {});
}

searchTone() {

  if (!this.searchKeyword.trim()) {
    this.fetchToneCatalog();
    return;
  }

  this.rbtService.searchTone(this.searchKeyword).subscribe({
    next: (data: any) => {

     // console.log("Search Result:", data);

      this.groupedSongs = this.groupByCategory(data);
    },

    error: (err: any) => {
      console.log(err);
    }
  });
}
getPlanName(plan: string | undefined): string {
  switch (plan) {
    case 'TSUBD':
      return 'Daily';
    case 'TSUBW':
      return 'Weekly';
    case 'TSUBM':
      return 'Monthly';
    default:
      return plan || '';
  }
}

currentTimeInSec = 0;
durationInSec = 0;

  categories = [
    {
      key: 'party',
      title: 'Party Music',
      songs: [
        { name: 'Taki Taki', artist: 'DJ Snake', previewUrl: 'assets/audio/taki-taki.mp3' },
        { name: 'Lean On', artist: 'Major Lazer', previewUrl: 'assets/audio/lean-on.mp3' },
        { name: 'On My Way', artist: 'Alan Walker', previewUrl: 'assets/audio/on-my-way.mp3' },
        { name: 'myonika', artist: 'Alan Walker', previewUrl: 'assets/audio/myonika.mp3' },
        { name: 'Animals', artist: 'Martin Garrix', previewUrl: 'assets/audio/animals.mp3' },
        { name: 'Despacito', artist: 'Luis Fonsi', previewUrl: 'assets/audio/despacito.mp3' }
      ]
    },
    {
      key: 'oldclassics',
      title: 'Old Classics',
      songs: [
        { name: 'Lag Ja Gale', artist: 'Lata Mangeshkar' },
        { name: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu' },
        { name: 'Pehla Nasha', artist: 'Udit Narayan' },
        { name: 'Chura Liya Hai Tumne', artist: 'Asha Bhosle' },
        { name: 'O Mere Dil Ke Chain', artist: 'Kishore Kumar' },
        { name: 'Kahin Door Jab Din Dhal Jaye', artist: 'Mukesh' }
      ]
    },
    {
      key: 'love',
      title: 'Love Music',
      songs: [
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'Shape of You', artist: 'Ed Sheeran' },
        { name: 'Tum Hi Ho', artist: 'Arijit Singh' },
        { name: 'Raabta', artist: 'Arijit Singh' },
        { name: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva' },
        { name: 'Humsafar', artist: 'Akhil Sachdeva' }
      ]
    },
    {
      key: 'sad',
      title: 'Sad Songs',
      songs: [
        { name: 'Channa Mereya', artist: 'Arijit Singh' },
        { name: 'Agar Tum Saath Ho', artist: 'Alka Yagnik' },
        { name: 'Tears in Heaven', artist: 'Eric Clapton' },
        { name: 'Bhula Dena', artist: 'Mustafa Zahid' },
        { name: 'Phir Bhi Tumko Chaahunga', artist: 'Arijit Singh' }
      ]
    },
    {
      key: 'trending',
      title: 'Trending Songs',
      songs: [
        { name: 'Calm Down', artist: 'Rema' },
        { name: 'Jhoome Jo Pathaan', artist: 'Arijit Singh' },
        { name: 'Apna Bana Le', artist: 'Arijit Singh' },
        { name: 'Kesariya', artist: 'Arijit Singh' },
        { name: 'Naatu Naatu', artist: 'RRR' },
        { name: 'Unholy', artist: 'Sam Smith' }
      ]
    },
    {
      key: 'emotional',
      title: 'Emotional Songs',
      songs: [
        { name: 'Channa Mereya', artist: 'Arijit Singh' },
        { name: 'Agar Tum Saath Ho', artist: 'Alka Yagnik' },
        { name: 'Tadap Tadap', artist: 'KK' },
        { name: 'Jeene Bhi De', artist: 'Arijit Singh' },
        { name: 'Bhula Dena', artist: 'Mustafa Zahid' },
        { name: 'Phir Bhi Tumko Chaahunga', artist: 'Arijit Singh' }
      ]
    },
    {
      key: 'bhakti',
      title: 'Bhakti Songs',
      songs: [
        { name: 'Hanuman Chalisa', artist: 'Hariharan' },
        { name: 'Shiv Tandav Stotram', artist: 'Ravana' },
        { name: 'Achyutam Keshavam', artist: 'Vishal Mishra' },
        { name: 'Om Jai Jagdish Hare', artist: 'Aarti' },
        { name: 'Jai Shree Ram', artist: 'Devotional' },
        { name: 'Madhurashtakam', artist: 'Religious' }
      ]
    },
    {
      key: 'romantic',
      title: 'Romantic Songs',
      songs: [
        { name: 'Janam Janam', artist: 'Arijit Singh' },
        { name: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva' },
        { name: 'Tum Hi Ho', artist: 'Arijit Singh' },
        { name: 'Perfect', artist: 'Ed Sheeran' },
        { name: 'Raabta', artist: 'Arijit Singh' },
        { name: 'Tera Hone Laga Hoon', artist: 'Atif Aslam' }
      ]
    },
    {
      key: 'motivational',
      title: 'Motivational Songs',
      songs: [
        { name: 'Zinda', artist: 'Siddharth Mahadevan' },
        { name: 'Lakshya', artist: 'Shankar Mahadevan' },
        { name: 'Kar Har Maidaan Fateh', artist: 'Sukhwinder Singh' },
        { name: 'Chak De India', artist: 'Sukhwinder Singh' },
        { name: 'Besabriyaan', artist: 'Armaan Malik' },
        { name: 'Aashayein', artist: 'KK' }
      ]
    }
  ];

getCategoryClass(category: string): string {
  switch (category) {
    case 'AFROBEATS_DANCE':
      return 'afrobeats';

    case 'COMEDY_MOVIE':
      return 'comedy';

    case 'FOLK_CULTURE':
      return 'folk';

    case 'HAUSA_POP':
      return 'hausa';

    case 'HA_POP':
      return 'hapop';

    case 'HIPLIFE_HILIFE':
      return 'hiplife';

    case 'LOVE_WEDDING':
      return 'love';

    case 'RELIGIOUS_DEVOTIONAL':
      return 'religious';

    case 'TRENDING':
      return 'trending';

    default:
      return 'default-category';
  }
}
  getIcon(title: string): string {
    switch (title) {
      case 'Party Music': return 'celebration';
      case 'Love Music': return 'favorite';
      case 'Sad Songs': return 'sentiment_dissatisfied';
      case 'Emotional Songs': return 'mood';
      case 'Bhakti Songs': return 'self_improvement';
      case 'Romantic Songs': return 'favorite_border';
      case 'Motivational Songs': return 'lightbulb';
      case 'Old Classics': return 'history_edu';
      case 'Trending Songs': return 'trending_up';
      default: return 'music_note';
    }
  }

  openRbtFlow(song: any) {
    // console.log("Selected Song:", song);
    this.selectedSong = song;
    this.showPopup = true;
    this.selectedPlan = '';
    this.resetAudio();
  }

 activateRbt() {
  if (this.userType === 'NEW' && !this.selectedPlan) {
    alert("Select plan first");
    return;
  }

  const payload = {
    msisdn: this.msisdn,
    toneCode: this.selectedSong.toneCode,
    packName: this.userType === 'NEW' 
    ? this.selectedPlan
     : this.existingRbt?.plan
  };

 // console.log("User Type =", this.userType);
    console.log("Activate payload =", payload);
  //console.log("Sending payload:", payload);

  this.rbtService.activateRbt(payload).subscribe({

    
    next: (res: any) => {

  const wasExistingUser = this.userType === 'EXISTING';

  this.showPopup = false;
  this.isSuccess = true;

  this.isExistingUser = true;
  this.userType = 'EXISTING';

  this.existingRbt = {
    name: this.selectedSong.toneName,
    plan: this.selectedPlan || this.existingRbt?.plan || '',
    validity: '30 Days Left'
  };

  this.popupMessage = wasExistingUser
    ? 'RBT Changed Successfully'
    : `RBT Activated (${this.selectedPlan})`;

  setTimeout(() => {
    this.isSuccess = false;
  }, 2000);
},

    error: (err: any) => {
      console.log(err);
      alert("API Error while activating RBT");
    }

  });
}
openPlayer(song: any) {
  //console.log("Song object =", song);

  this.selectedSong = song;
  this.openRbtFlow(song);

  const audio: HTMLAudioElement = this.audioPlayer?.nativeElement;

  if (!audio || !this.selectedSong?.toneUrl) return;

  audio.src = this.selectedSong.toneUrl;
  audio.load();

  audio.play()
    .then(() => {
     // console.log("Audio playing automatically");
      this.isPlaying = true;
    })
    .catch((err) => {
      //console.log("Autoplay blocked:", err);
    });

  audio.onpause = () => this.isPlaying = false;
  audio.onended = () => this.isPlaying = false;
}


  goToMusic() {}
  goToTopSongs() {}
  goToFavorites() {}
  goToSetRbt() {}

 togglePlay() {

 // console.log("PLAY BUTTON CLICKED");

  const audio: HTMLAudioElement = this.audioPlayer?.nativeElement;

  if (!audio) {
   // console.log("Audio element not found");
    return;
  }

  if (!this.selectedSong?.toneUrl) {
   // console.log("No toneUrl found");
    return;
  }

  if (audio.src !== this.selectedSong.toneUrl) {
    audio.src = this.selectedSong.toneUrl;
  }

  if (this.isPlaying) {
    audio.pause();
    this.isPlaying = false;
   // console.log("Audio paused");
  } else {

    audio.play()
      .then(() => {
        this.isPlaying = true;
       // console.log("Audio started successfully");
      })
      .catch((err) => {
       // console.log("Play error =", err);
      });
  }
}

onLoadedMetadata() {
  const audio = this.audioPlayer.nativeElement;

  this.durationInSec = audio.duration;
  this.duration = this.formatTime(audio.duration);
}

onTimeUpdate() {
  const audio = this.audioPlayer.nativeElement;

  this.currentTimeInSec = audio.currentTime;
  this.progress = (audio.currentTime / audio.duration) * 100;
  this.currentTime = this.formatTime(audio.currentTime);
}

seekAudio(event: Event) {
  const audio = this.audioPlayer.nativeElement;

  const value = Number((event.target as HTMLInputElement).value);
  audio.currentTime = value;

  this.currentTimeInSec = value;
}

formatTime(time: number): string {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

resetAudio() {
  const audio = this.audioPlayer?.nativeElement;

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  this.isPlaying = false;
  this.progress = 0;
  this.currentTime = '0:00';
  this.duration = '0:00';
  this.currentTimeInSec = 0;
  this.durationInSec = 0;
}

seek(event: any) {
  const audio = this.audioPlayer.nativeElement;
  audio.currentTime = event.target.value;
}
shuffle() {
  console.log('Shuffle clicked');
}
prev() {
  console.log('Previous song');
}
next() {
  console.log('Next song');
}
repeat() {
  console.log('Repeat clicked');
}

}