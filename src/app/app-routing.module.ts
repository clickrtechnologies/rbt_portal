import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Default route → login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // LOGIN PAGE
  {
    path: 'login',
    loadComponent: () =>
      import('./Features/login/login.component')
        .then(m => m.LoginComponent)
  },

  // MUSIC PAGE (FIXED ✔️ IMPORTANT)
  {
    path: 'music',
    loadComponent: () =>
      import('./Features/Home/Home.component')
        .then(m => m.MusicComponent)
  },

  // SET RBT PAGE
  {
    path: 'set-rbt',
    loadComponent: () =>
      import('./Features/set-rbt/set-rbt.component')
        .then(m => m.SetRbtComponent)
  },

  // fallback (optional but safe)
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }