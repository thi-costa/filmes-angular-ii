import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';



@NgModule({
  declarations: [
    MoviesComponent,
    FilterComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [MoviesComponent],
})
export class MoviesModule {}
