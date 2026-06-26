import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SetRbtComponent } from './Features/set-rbt/set-rbt.component';

@NgModule({
  declarations: [
    AppComponent,
    SetRbtComponent   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
     HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }