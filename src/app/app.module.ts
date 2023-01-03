import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
