import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'] 
})
export class RecommendedComponent implements OnInit {
  title      : string = 'Recommended for you';
  recommended: EntertainmentData[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.updateDisplay();
  }

  updateDisplay() {
    this.mediaService.getMedia().subscribe(data =>  {
      const result = data.filter(media => !media.isTrending);
      this.recommended = result;
    });
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }

}
