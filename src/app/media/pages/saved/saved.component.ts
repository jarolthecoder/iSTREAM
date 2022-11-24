import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html'
})
export class SavedComponent implements OnInit {
  tvseriesTitle: string = 'Bookmarked TV Series';
  savedMovies  : EntertainmentData[] = [];
  savedTVSeries: EntertainmentData[] = [];
  loading = true;
  // Function passed as Input to child components: bookmarked-movies, bookmarked-tvseries
  updateDisplay =  (): void => { 
    this.getMedia(); 
  }

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia() {
    this.mediaService.getMedia().subscribe( data => {
      const resultMovies = data.filter(media => media.isBookmarked && media.category === 'Movie');
      const resultTVSeries = data.filter(media => media.isBookmarked && media.category === 'TV Series');
      
      this.savedMovies = resultMovies;
      this.savedTVSeries = resultTVSeries;
      this.loading = false;
    });
  }

}
