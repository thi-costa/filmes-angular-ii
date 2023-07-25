import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss'],
})
export class DeleteMovieComponent implements OnInit, OnDestroy {
  movieId!: string;

  constructor(
    private _service: MoviesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.verifyRoute();
    this.deleteMovie();
  }

  ngOnDestroy(): void {
      this._router.navigate(['/']);
  }

  verifyRoute(): void {
    if (this._route.routeConfig.path.includes('delete')) {
      this.movieId = this._route.snapshot.params['id'];
      console.log(`Filme de id '${this.movieId}'`)
      this._service.getMoviesById(this.movieId);
    }
  }
  deleteMovie(){
    this._service.deleteMoviesById(this.movieId).subscribe(
      () => {
        console.log('Movie deleted with sucess!')
      },
      (error) => {
        console.log('Error deleting movie: ', error);
        this.ngOnDestroy();
      });
  }
}
