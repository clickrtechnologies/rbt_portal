import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './Features/music/music.component';

const routes: Routes = [
  { path: '', redirectTo: 'music', pathMatch: 'full' },
  { path: 'music', component: MusicComponent },

  // future pages (example)
  // { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}