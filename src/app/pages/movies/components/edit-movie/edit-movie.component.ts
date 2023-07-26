import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieType } from 'src/app/types/movie';
import { MoviesService } from '../../movies.service';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  public movie: MovieType;
  public movieForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _moviesService: MoviesService
  ) {}

  ngOnInit() {
    const movieId = this._route.snapshot.params['id'];
    console.log('Edit form - id: ', movieId);
    this._moviesService
      .getMovieById(movieId)
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.movie = response;
          this.initForm();
        },
        (error) => {
          console.error('Error getting movie by id', error);
        }
      );
  }
  initForm(){
    this.movieForm = this.formBuilder.group({
      id: [this.movie.id, Validators.required],
      name: [this.movie.name, Validators.required],
      synopsis: [this.movie.synopsis, Validators.required],
      trailerUrl: [this.movie.trailerUrl, Validators.required],
      imageUrl: [this.movie.imageUrl, Validators.required],
      minutes: [this.movie.minutes, Validators.required],
      rating: [this.movie.rating, Validators.required],
      favorite: [this.movie.favorite, Validators.required],
    });
  }

  onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }

    const updateMovie: MovieType = {
      id: this.movieForm.value.id,
      name: this.movieForm.value.name,
      synopsis: this.movieForm.value.synopsis,
      trailerUrl: this.movieForm.value.trailerUrl,
      imageUrl: this.movieForm.value.imageUrl,
      minutes: this.movieForm.value.minutes,
      rating: this.movieForm.value.rating,
      favorite: this.movieForm.value.favorite,
    };
    console.log('UpdatedMovie: ', updateMovie);
    this._moviesService.updateMovie(updateMovie).subscribe(
      (response) => {
        console.log('Movie updated successfully!', response);
        this._router.navigate(['/movies', this.movie.id]);
      },
      (error) => {
        console.error('Error adding movie', error);
      }
    );
    
  }
  cancelEdit() {
    this._router.navigate(['/']);
  }
}
