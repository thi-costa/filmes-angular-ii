import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieType } from 'src/app/types/movie';
import { MovieParamsType } from 'src/app/types/movieParams';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private _url = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  public getMovies(params?: MovieParamsType): Observable<MovieType[]>{
    return this._http.get<MovieType[]>(`${this._url}/movies`, { params });
  }
}
