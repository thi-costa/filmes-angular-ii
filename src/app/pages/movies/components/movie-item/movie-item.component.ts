import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieType } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie!: MovieType;
  trailerUrl: string = '';

  openVideoModal() {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
      videoModal.classList.add('show');
      videoModal.style.display = 'block';
    }
  }

  closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
      videoModal.classList.remove('show');
      videoModal.style.display = 'none';
    }
  }
}
