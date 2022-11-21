import { Component, OnInit, Input } from '@angular/core';
import { EntertainmentData } from 'src/app/media/interface/media';
import { MediaService } from 'src/app/media/services/media.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() mediaResults: EntertainmentData[] = [];
  @Input() searchTitle: string = '';

  constructor( private mediaService: MediaService) { }

  ngOnInit(): void {
  }

  saveMedia(media: EntertainmentData) {
    this.mediaService.saveMedia(media).subscribe();
  }

}
