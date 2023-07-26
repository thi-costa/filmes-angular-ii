import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieType } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie!: MovieType;
  trailerUrl: string = '';

  constructor(private _router: Router){}

  openMoviesDetail(movieId: string){
    this._router.navigate([`/movies/${movieId}`]);
  }
  editMovie(movieId: string){
    this._router.navigate([`/movies/edit/${movieId}`]);
  }
  deleteMovie(movieId: string){
    this._router.navigate([`/movies/delete/${movieId}`]);
  }
}
