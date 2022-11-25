import { Component, Input } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-tvseries-bookmarked',
  templateUrl: './tvseries-bookmarked.component.html',
  styles: [` @media (width <= 800px){ h2 { padding-top: 2rem; } }`]
})
export class TvseriesBookmarkedComponent {
  tvseriesTitle          : string = 'Bookmarked TV Series';
  @Input() savedTVSeries : EntertainmentData[] = [];
  @Input() updateDisplay!: ()=> void;

  constructor(private mediaService: MediaService) { }

  saveMedia(media: EntertainmentData) {
    const index = this.savedTVSeries.indexOf(media);
    this.mediaService.saveMedia(media).subscribe();
    this.savedTVSeries.splice(index, 1);
  }
}
