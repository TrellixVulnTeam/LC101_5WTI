import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
const { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } = pkg;
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresComponent } from './chores/chores.component';
import pnpmkg from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
