import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  tap,
  catchError,
  throwError
} from 'rxjs';
import { MovieType } from 'src/app/types/movie';
import { MovieParamsType } from 'src/app/types/movieParams';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private _url = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  public getMovies(params?: MovieParamsType): Observable<MovieType[]> {
    console.log('url: ', `${this._url}/movies`, { params });
    return this._http.get<MovieType[]>(`${this._url}/movies`, { params });
  }
  getMovieById(movieId: string): Observable<MovieType> {
    const url = `${this._url}/movies/${movieId}`;
    return this._http.get<MovieType>(url);
  }
  updateMovie(movie: MovieType){
    const url = `${this._url}/movies/${movie.id}`;
    return this._http.put<MovieType>(url, movie);

  }
  deleteMoviesById(movieId: string): Observable<void> {
    const url = `${this._url}/movies/${movieId}`;
    console.log(`url para deletar: ${url}`);
    return this._http.delete<void>(url);
  }
}
