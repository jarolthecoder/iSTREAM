import { Component, Input, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  @Input() trending      : EntertainmentData[] = [];
  @Input() isLoaded!     : boolean;
  @Input() updateDisplay!: () => void;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.updateDisplay();
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }

  scrollReset() {
    const scrollGrid = document.querySelector('.trending-displayer') as HTMLElement;
    scrollGrid.scrollLeft = 0;
  }
  
}
