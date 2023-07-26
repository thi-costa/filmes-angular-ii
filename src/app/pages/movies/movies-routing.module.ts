import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'favorite',
    component: MoviesComponent,
    data: {
      favorite: true,
    },
  },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'delete/:id', component: DeleteMovieComponent },
  { path: ':id', component: MovieDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
