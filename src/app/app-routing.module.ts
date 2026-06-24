import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // DEFAULT → LOGIN
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // LOGIN PAGE
  {
    path: 'login',
    loadComponent: () =>
      import('./Features/login/login.component')
        .then(m => m.LoginComponent)
  },

  // MUSIC / HOME PAGE
  {
    path: 'music',
    loadComponent: () =>
      import('./Features/Home/Home.component')
        .then(m => m.MusicComponent)   // ✅ FIXED (important)
  },

  // SET RBT PAGE
  {
    path: 'set-rbt',
    loadComponent: () =>
      import('./Features/set-rbt/set-rbt.component')
        .then(m => m.SetRbtComponent)
  },

  // MANAGE ACCOUNT / MY RBT PAGE
  // {
    // path: 'manage-account',
    // loadComponent: () =>
      // import('./Features/manage-account/manage-account.component')
        // .then(m => m.ManageAccountComponent)
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