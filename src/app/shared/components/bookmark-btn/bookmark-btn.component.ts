import { Component, Output, EventEmitter } from '@angular/core';
import { EntertainmentData } from 'src/app/media/interface/media';

@Component({
  selector: 'app-bookmark-btn',
  templateUrl: './bookmark-btn.component.html',
  styleUrls: ['./bookmark-btn.component.css']
})
export class BookmarkBtnComponent {
  
  @Output() onSavedMedia: EventEmitter<EntertainmentData> = new EventEmitter();

  constructor() {}

  saveMedia(media: any) {
    this.onSavedMedia.emit(media);
  }

}
