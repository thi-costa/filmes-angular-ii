import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/shared/components/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then((m) => m.MoviesModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
