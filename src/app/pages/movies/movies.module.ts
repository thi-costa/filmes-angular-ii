import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from './components/filter/filter.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';



@NgModule({
  declarations: [
    MoviesComponent,
    FilterComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    DeleteMovieComponent,
    EditMovieComponent,
    NewMovieComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatIconModule,
  ],
  // exports: [MoviesComponent],
})
export class MoviesModule {}
