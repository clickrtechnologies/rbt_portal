import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
  id: string;
  title: string;
  artist: string;
  icon: string;
  color: string;
}

interface SongSection {
  key: string;
  name: string;
  subtitle: string;
  icon: string;
  songs: Song[];
}

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnDestroy {
  readonly sections: SongSection[] = [
    {
      key: 'congolese',
      name: 'Congolese Essentials',
      subtitle: 'Heritage Musical Congo',
      icon: 'CG',
      songs: [
        { id: '101742010001805', title: 'Beyanga', artist: 'MBILIA BEL', icon: '\u266b', color: '#2a2300' },
        { id: '101742010001816', title: 'Choisy Matata', artist: 'JB MPIANA', icon: '\u25c9', color: '#2a1d00' },
        { id: '101742010001738', title: 'Lisanga Bambanda', artist: 'MBILIA BEL', icon: '\u266a', color: '#1d2600' },
        { id: '101742010001749', title: 'Nakei Nairobi', artist: 'MBILIA BEL', icon: '\u2605', color: '#00211f' },
        { id: '101742010001790', title: '3\u00e8me Doigt', artist: 'FERRE GOLA', icon: '\u25c6', color: '#2a1400' }
      ]
    },
    {
      key: 'french',
      name: 'Best of French Tracks',
      subtitle: 'Le meilleur de la francophonie',
      icon: 'FR',
      songs: [
        { id: '101742010001793', title: 'Ainsi Bas La Vida', artist: 'INDILA', icon: '\u25b2', color: '#151b3d' },
        { id: '101742010001880', title: 'Papaoutai', artist: 'STROMAE', icon: '\u25a3', color: '#14253d' },
        { id: '101742010001895', title: 'Reine', artist: 'DADJU', icon: '\u2665', color: '#321427' },
        { id: '101742010001801', title: 'Avant Toi', artist: 'VITAA', icon: '\u2606', color: '#2b1838' },
        { id: '101742010001838', title: "Je T'attends", artist: 'FERRE GOLA', icon: '\u25cf', color: '#122539' },
        { id: '101742010001741', title: 'Love Story', artist: 'INDILA', icon: '\u2661', color: '#321b1f' }
      ]
    },
    {
      key: 'party',
      name: 'Music Party',
      subtitle: 'Hits pour faire la fete',
      icon: '\u2726',
      songs: [
        { id: '101742010001785', title: 'Taki Taki', artist: 'DJ SNAKE', icon: '\u25b6', color: '#3a1800' },
        { id: '101742010001729', title: 'In Da Club', artist: '50 CENT', icon: '\u25c9', color: '#361600' },
        { id: '101742010001703', title: 'Candy Shop', artist: '50 CENT', icon: '\u25c7', color: '#401a32' },
        { id: '101742010001792', title: 'Afro Trap Pt.3', artist: 'MHD', icon: '\u25a0', color: '#332000' },
        { id: '101742010001803', title: 'Belle', artist: 'SINGUILA', icon: '\u2736', color: '#25193a' }
      ]
    },
    {
      key: 'love',
      name: 'Love & Romance',
      subtitle: 'Sons pour les amoureux',
      icon: '\u2665',
      songs: [
        { id: '101742010001895-love', title: 'Reine', artist: 'DADJU', icon: '\u2665', color: '#3a1124' },
        { id: '101742010001838-love', title: "Je T'attends", artist: 'FERRE GOLA', icon: '\u2661', color: '#371527' },
        { id: '101742010001709', title: 'Die With A Smile', artist: 'LADY GAGA', icon: '\u2726', color: '#321823' },
        { id: '101742010001775', title: 'Until I Found You', artist: 'STEPHEN SANCHEZ', icon: '\u2605', color: '#2d1b2e' },
        { id: '101742010001740', title: 'Love Me Like You Do', artist: 'ELLIE GOULDING', icon: '\u25c6', color: '#2b1736' },
        { id: '101742010001801-love', title: 'Avant Toi', artist: 'VITAA', icon: '\u25cf', color: '#331827' },
        { id: '101742010001741-love', title: 'Love Story', artist: 'INDILA', icon: '\u25a3', color: '#391523' }
      ]
    },
    {
      key: 'classic',
      name: 'Classic International Hits',
      subtitle: 'Legendes intemporelles',
      icon: '\u2605',
      songs: [
        { id: '101742010001746', title: 'Baby', artist: 'JUSTIN BIEBER', icon: '\u266b', color: '#2d211b' },
        { id: '101742010001768', title: 'Still D.R.E.', artist: 'DR. DRE', icon: '\u25a0', color: '#2b211e' },
        { id: '101742010001772', title: 'Three Little Birds', artist: 'BOB MARLEY', icon: '\u25c9', color: '#1e2c1b' },
        { id: '101742010001711', title: 'Dilemma', artist: 'NELLY', icon: '\u25cf', color: '#252126' },
        { id: '101742010001756', title: 'Pretty Little Baby', artist: 'CONNIE FRANCIS', icon: '\u2726', color: '#2d221a' }
      ]
    },
    {
      key: 'weekend',
      name: 'Weekend Party Vibes',
      subtitle: 'Pour le vendredi soir',
      icon: '\u2726',
      songs: [
        { id: '101742010001705', title: 'Calm Down', artist: 'REMA', icon: '\u25c9', color: '#311b42' },
        { id: '101742010001759', title: 'OZEBA', artist: 'REMA', icon: '\u25b2', color: '#2e1741' },
        { id: '101742010001710', title: 'Commas', artist: 'AYRA STARR', icon: '\u25cf', color: '#2c1740' },
        { id: '101742010001761', title: 'Ramenez la Coupe', artist: 'VEGEDREAM', icon: '\u2605', color: '#261a3d' },
        { id: '101742010001696', title: 'AZAMAN', artist: 'REMA', icon: '\u25c6', color: '#2f163d' },
        { id: '101742010001704', title: 'Butta My Bread', artist: 'JZYNO', icon: '\u25a0', color: '#311740' }
      ]
    },
    {
      key: 'gospel',
      name: 'Gospel & Prieres',
      subtitle: 'Louange et adoration',
      icon: '\u271d',
      songs: [
        { id: '101742010001747', title: 'Mighty Name of Jesus', artist: 'THE BELONGING CO', icon: '\u271d', color: '#13243f' },
        { id: '101742010001697', title: 'Amoureux', artist: 'LORD LOMBO', icon: '\u266b', color: '#0f2840' },
        { id: '101742010001899', title: 'Saison', artist: 'LORD LOMBO', icon: '\u2605', color: '#112b45' },
        { id: '101742010001771', title: 'Tika Na Belela', artist: 'PARFAITE MASSA', icon: '\u25cf', color: '#10263d' },
        { id: '101742010001806', title: 'Biberon', artist: 'SAMY LRZO', icon: '\u25c6', color: '#13233c' }
      ]
    },
    {
      key: 'mood',
      name: 'Your Mood. Your Tune',
      subtitle: 'Sons qui vous comprennent',
      icon: '\u25d0',
      songs: [
        { id: '101742010001700', title: 'Birds of a Feather', artist: 'BILLIE EILISH', icon: '\u25d0', color: '#002f34' },
        { id: '101742010001742', title: 'Lovely', artist: 'BILLIE EILISH', icon: '\u25c7', color: '#062d33' },
        { id: '101742010001693', title: 'Arcade', artist: 'DUNCAN LAURENCE', icon: '\u25a3', color: '#0b2b35' },
        { id: '101742010001692', title: 'Anxiety', artist: 'DOECHII', icon: '\u25cc', color: '#0a2d34' },
        { id: '101742010001715', title: 'Experience', artist: 'LUDOVICO EINAUDI', icon: '\u266a', color: '#082833' }
      ]
    },
    {
      key: 'motivation',
      name: 'Motivation & Confiance',
      subtitle: 'Boostez votre journee',
      icon: '\u25b2',
      songs: [
        { id: '101742010001750', title: 'Not Afraid', artist: 'EMINEM', icon: '\u25b2', color: '#0f321f' },
        { id: '101742010001720', title: "God's Plan", artist: 'DRAKE', icon: '\u2605', color: '#10341e' },
        { id: '101742010001751', title: 'Not Like Us', artist: 'KENDRICK LAMAR', icon: '\u25c9', color: '#12391f' },
        { id: '101742010001760', title: 'Roar', artist: 'KATY PERRY', icon: '\u25cf', color: '#0c321d' },
        { id: '101742010001781', title: 'Bugatti', artist: 'ACE HOOD', icon: '\u25c6', color: '#11361f' },
        { id: '101742010001712', title: 'Dior', artist: 'POP SMOKE', icon: '\u25a3', color: '#0c311c' }
      ]
    },
    {
      key: 'dance',
      name: 'Dance Charts',
      subtitle: 'Sons pour danser',
      icon: '\u25c6',
      songs: [
        { id: '101742010001880-dance', title: 'Papaoutai', artist: 'STROMAE', icon: '\u25c6', color: '#3c1111' },
        { id: '101742010001897', title: 'Rock That Body', artist: 'BLACK EYED PEAS', icon: '\u25a0', color: '#3b1015' },
        { id: '101742010001841', title: 'Jolie B\u00e9b\u00e9', artist: 'VEGEDREAM', icon: '\u2726', color: '#3a1117' },
        { id: '101742010001717', title: 'Gasolina', artist: 'DADDY YANKEE', icon: '\u25b6', color: '#40100f' },
        { id: '101742010001827', title: 'Friendships', artist: 'PASCAL LETOUBLON', icon: '\u25c9', color: '#3d1112' }
      ]
    }
  ];

  readonly navItems: NavItem[] = [
    { id: 'home', icon: '\u266b', label: 'Accueil' },
    { id: 'top', icon: '\u25b2', label: 'Top Sons' },
    { id: 'favorites', icon: '\u2665', label: 'Favoris' },
    { id: 'account', icon: '\u25cf', label: 'Mon RBT' }
  ];

  selectedSong: Song | null = null;
  activeSongId: string | null = null;
  activeNav = 'home';
  searchQuery = '';
  waveformBars = this.createWaveformBars();
  previewTimer: ReturnType<typeof setInterval> | null = null;
  previewProgress = 0;
  previewTime = '0:00';
  isPlaying = false;
  toastMessage = 'RBT active avec succes!';
  showToast = false;

  get totalSongs() {
    return this.sections.reduce((count, section) => count + section.songs.length, 0);
  }

  get filteredSections() {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      return this.sections;
    }

    return this.sections
      .map((section) => ({
        ...section,
        songs: section.songs.filter((song) => (
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query)
        ))
      }))
      .filter((section) => section.songs.length > 0);
  }

  ngOnDestroy() {
    this.stopPreview();
    document.body.style.overflow = '';
  }

  setSearch(event: Event) {
    const input = event.target instanceof HTMLInputElement ? event.target : null;
    this.searchQuery = input?.value || '';
  }

  clearSearch() {
    this.searchQuery = '';
  }

  openSong(song: Song) {
    this.selectedSong = song;
    this.activeSongId = null;
    this.resetPreview();
    this.waveformBars = this.createWaveformBars();
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.stopPreview();
    this.selectedSong = null;
    this.activeSongId = null;
    document.body.style.overflow = '';
  }

  closeModalOnBg(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  togglePreview() {
    if (!this.selectedSong) {
      return;
    }

    if (this.isPlaying) {
      this.stopPreview();
      this.activeSongId = null;
      return;
    }

    this.startPreview();
    this.activeSongId = this.selectedSong.id;
  }

  startPreview() {
    this.isPlaying = true;
    const duration = 30;
    const start = Date.now() - (this.previewProgress / 100) * duration * 1000;

    this.previewTimer = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      const pct = Math.min((elapsed / duration) * 100, 100);

      this.previewProgress = pct;
      this.previewTime = this.formatPreviewTime(elapsed);

      if (pct >= 100) {
        this.stopPreview();
        this.activeSongId = null;
        this.previewProgress = 0;
        this.previewTime = '0:00';
      }
    }, 100);
  }

  stopPreview() {
    this.isPlaying = false;

    if (this.previewTimer) {
      clearInterval(this.previewTimer);
      this.previewTimer = null;
    }
  }

  seekPreview(event: MouseEvent) {
    const waveform = event.currentTarget instanceof HTMLElement
      ? event.currentTarget
      : null;

    if (!waveform) {
      return;
    }

    const rect = waveform.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));

    this.previewProgress = pct;
    this.previewTime = this.formatPreviewTime((pct / 100) * 30);
  }

  activateRBT() {
    const title = this.selectedSong?.title || 'RBT';

    this.closeModal();
    this.toastMessage = `${title} active!`;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  setActiveNav(id: string) {
    this.activeNav = id;
  }

  songArtStyle(song: Song | null) {
    return {
      background: `linear-gradient(135deg, ${song?.color || '#2a2a2a'}, #141414)`
    };
  }

  trackSection(_: number, section: SongSection) {
    return section.key;
  }

  trackSong(_: number, song: Song) {
    return song.id;
  }

  trackNav(_: number, navItem: NavItem) {
    return navItem.id;
  }

  private resetPreview() {
    this.stopPreview();
    this.previewProgress = 0;
    this.previewTime = '0:00';
  }

  private createWaveformBars() {
    return Array.from({ length: 32 }, () => 6 + Math.random() * 18);
  }

  private formatPreviewTime(seconds: number) {
    const wholeSeconds = Math.floor(seconds);
    return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, '0')}`;
  }
}
