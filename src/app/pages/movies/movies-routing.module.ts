import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { AuthGuard } from '../shared/auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'favorite',
    component: MoviesComponent,
    data: {
      favorite: true,
    },
  },
  { path: 'edit/:id', component: EditMovieComponent, canActivate: [AuthGuard] },
  {
    path: 'delete/:id',
    component: DeleteMovieComponent,
    canActivate: [AuthGuard],
  },
  { path: ':id', component: MovieDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
