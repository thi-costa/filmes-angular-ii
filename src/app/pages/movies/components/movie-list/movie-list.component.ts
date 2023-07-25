import { Component, OnInit } from '@angular/core';
import { MovieType } from 'src/app/types/movie';
import { take } from 'rxjs';
import { MoviesService } from '../../movies.service';
import { MovieParamsType } from 'src/app/types/movieParams';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movies: MovieType[] = [];

  constructor(private _service: MoviesService) {}

  ngOnInit() {
    this.getMoviesBy();
  }

  public getMoviesBy(params?: MovieParamsType) {
    this._service
      .getMovies(params)
      .pipe(take(1))
      .subscribe((response) => {
        this.movies = response;
      });
  }
}
