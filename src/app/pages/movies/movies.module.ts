import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterComponent } from './components/filter/filter.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';



@NgModule({
  declarations: [
    MoviesComponent,
    FilterComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  // exports: [MoviesComponent],
})
export class MoviesModule {}
