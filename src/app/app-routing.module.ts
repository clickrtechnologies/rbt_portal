import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './Features/Home/Home.component';
import { LoginComponent } from './Features/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'music', component: MusicComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }