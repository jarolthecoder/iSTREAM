import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending: EntertainmentData[] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.updateDisplay();
  }

  updateDisplay() {
    this.mediaService.getMedia().subscribe(data =>  {
      const result = data.filter(media => media.isTrending);
      this.trending = result;
    });
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }
  
}
