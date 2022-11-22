import { Component, OnInit, Input } from '@angular/core';
import { EntertainmentData } from 'src/app/media/interface/media';
import { MediaService } from 'src/app/media/services/media.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-media-displayer',
  templateUrl: './media-displayer.component.html',
  styleUrls: ['./media-displayer.component.css']
})
export class MediaDisplayerComponent implements OnInit {

  mediaResults: EntertainmentData[] = [];
  mediaSuggested: EntertainmentData[] = [];
  searchTitle: string = '';
  public innerWidth: any;

  constructor( private mediaService: MediaService, public shared: SharedService ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
  }

  search(title: string) {
    this.mediaService.searchMedia(title).subscribe( data => {
      this.mediaResults = data
      this.shared.resultBlock = true;
      this.searchTitle = title;
    });
  }

  suggest(title: string) {
    if(title.length >= 1) {
      this.shared.resultBlock = true;
      this.mediaService.searchMedia(title).subscribe( data => {
        this.mediaResults= data;
        this.searchTitle = title;
      });
    } else {
        this.shared.resultBlock = false;
    }
  }


}
