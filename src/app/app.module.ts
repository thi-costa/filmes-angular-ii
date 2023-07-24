import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/components/menu/menu.component';
import { HeaderModule } from './components/header/header.module';
import { MovieListModule } from './pages/movie-list/movie-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, MovieListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
