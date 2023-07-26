import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';
import { MovieType } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieType;
  youtubeVideoUrlSafe!: SafeResourceUrl | null;

  constructor(
    private _route: ActivatedRoute,
    private _service: MoviesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      const movieId = params['id'];
      // Fetch the movie details by ID using the FilmesService
      this._service.getMovieById(movieId).subscribe(
        (movie) => {
          this.movie = movie;
          console.log(`URL before sanitizer: "${this.movie.trailerUrl}"`);
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    });
  }

  getVideoId(videoURL: string): string {
    let id: string = '';
    id = videoURL.replace('https://www.youtube.com/watch?v=', '');
    id = id.replace('https://www.youtube.com/embed/', '');

    return id;
    
  }
}