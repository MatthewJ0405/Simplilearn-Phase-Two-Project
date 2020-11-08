import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { VideogameTriviaComponent } from './videogame-trivia/videogame-trivia.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VideogameTriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [VideogameTriviaComponent]
})
export class AppModule { }
