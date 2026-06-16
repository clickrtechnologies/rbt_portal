import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { MusicComponent } from './Features/Home/Home.component';
import { RbtDialogComponent } from './Features/rbt-dialog/rbt-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,

    // ✅ standalone components go here
    MusicComponent,
    RbtDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }