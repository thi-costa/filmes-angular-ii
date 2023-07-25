import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/components/menu/menu.component';
import { HeaderModule } from './components/header/header.module';
import { MoviesModule } from './pages/movies/movies.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
