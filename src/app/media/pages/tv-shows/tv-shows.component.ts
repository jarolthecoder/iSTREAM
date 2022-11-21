import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html'
})
export class TvShowsComponent implements OnInit {
  title: string = 'TV Series';
  tvSeries: EntertainmentData[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.updateDisplay();
  }

  updateDisplay() {
    this.mediaService.getMedia().subscribe(data =>  {
      const result = data.filter(media => media.category === 'TV Series');
      this.tvSeries = result;
    });
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }

}
