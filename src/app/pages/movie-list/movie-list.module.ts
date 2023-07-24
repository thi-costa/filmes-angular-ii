import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { HttpClientModule } from "@angular/common/http";
import { FilterComponent } from './components/filter/filter.component'



@NgModule({
  declarations: [MovieListComponent, FilterComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MovieListComponent],
})
export class MovieListModule {}
