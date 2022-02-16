import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { VisitorComponent } from './components/visitor/visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
