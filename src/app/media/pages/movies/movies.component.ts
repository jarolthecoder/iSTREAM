import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  title : string = 'Movies';
  movies: EntertainmentData[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.updateDisplay();
  }

  updateDisplay() {
    this.mediaService.getMedia().subscribe(data =>  {
      const result = data.filter(media => media.category === 'Movie');
      this.movies = result;
    });
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }

}
