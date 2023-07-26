import { Component, OnInit } from '@angular/core';
import { MovieType } from 'src/app/types/movie';
import { take } from 'rxjs';
import { MoviesService } from '../../movies.service';
import { MovieParamsType } from 'src/app/types/movieParams';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movies: MovieType[] = [];
  public paramsGlobal: MovieParamsType = {};

  constructor(private _service: MoviesService, private _route: ActivatedRoute) {}

  ngOnInit() {
    console.log('favorite: ', this._route.snapshot.data['favorite']);
    if(this._route.snapshot.data['favorite']){
      this.paramsGlobal.favorite = true;
      console.log('Favorite 2: ', this.paramsGlobal);
      this.getMoviesBy(this.paramsGlobal);
    } else {
      this.getMoviesBy();
    }
  }

  public getMoviesBy(params?: MovieParamsType) {
    console.log('params: ', params);
    this._service
      .getMovies(params)
      .pipe(take(1))
      .subscribe((response) => {
        this.movies = response;
      });
  }
}
