import { Component, Input } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-tvseries-bookmarked',
  templateUrl: './tvseries-bookmarked.component.html'
})
export class TvseriesBookmarkedComponent {
  tvseriesTitle          : string = 'Bookmarked TV Series';
  @Input() savedTVSeries : EntertainmentData[] = [];
  @Input() updateDisplay!: ()=> void;

  constructor(private mediaService: MediaService) { }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
    this.updateDisplay();
  }

}
