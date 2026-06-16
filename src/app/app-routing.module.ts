import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './Features/music/music.component';
import { LoginComponent } from './Features/login/login.component';
import { SetRbtComponent } from './Features/set-rbt/set-rbt.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'music', component: MusicComponent },

  { path: 'set-rbt', component: SetRbtComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}