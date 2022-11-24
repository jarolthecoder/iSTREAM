import { Component, Input, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'] 
})
export class RecommendedComponent implements OnInit {
  @Input() recommended: EntertainmentData[] = [];
  @Input() updateDisplay!: ()=> void;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.updateDisplay()
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }
}
