import { Component, Input } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-movies-bookmarked',
  templateUrl: './movies-bookmarked.component.html'
})
export class MoviesBookmarkedComponent {
  moviesTitle            : string = 'Bookmarked movies';
  @Input() savedMovies   : EntertainmentData[] = [];
  @Input() isLoaded!      : boolean;
  @Input() updateDisplay!: ()=> void;

  constructor(private mediaService: MediaService) { }

  saveMedia(media: EntertainmentData) {
    const index = this.savedMovies.indexOf(media);
    this.mediaService.saveMedia(media).subscribe();
    this.savedMovies.splice(index, 1);
  }
}
