import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./Features/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: 'music',
    loadComponent: () =>
      import('./Features/Home/Home.component')
        .then(m => m.MusicComponent),
    canActivate: [AuthGuard]   
  },

  {
    path: 'set-rbt',
    loadComponent: () =>
      import('./Features/set-rbt/set-rbt.component')
        .then(m => m.SetRbtComponent)
  },

  // MANAGE ACCOUNT / MY RBT PAGE (COMMENTED AS IT IS)
  // {
  //   path: 'manage-account',
  //   loadComponent: () =>
  //     import('./Features/manage-account/manage-account.component')
  //       .then(m => m.ManageAccountComponent)
  // },

  // FALLBACK ROUTE
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }