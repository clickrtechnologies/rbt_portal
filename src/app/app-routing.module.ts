import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./Features/login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'music',
    loadComponent: () =>
      import('./Features/Home/Home.component').then(m => m.MusicComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}