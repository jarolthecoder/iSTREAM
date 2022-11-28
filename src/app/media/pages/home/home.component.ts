import { Component, OnInit } from '@angular/core';
import { EntertainmentData } from '../../interface/media';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleTrending   : string = 'Trending';
  titleRecommended: string = 'Recommended for you';
  trending        : EntertainmentData[] = [];
  recommended     : EntertainmentData[] = [];
  isLoaded        : boolean = true;

  // Function passed as Input to child components: trending, recommended
  updateDisplay =  (): void => { 
    this.getMedia(); 
  }
  
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void { }

  getMedia() {
    this.mediaService.getMedia().subscribe( data => {
      const recommended = data.filter(media => !media.isTrending);
      const trending = data.filter(media => media.isTrending);
      
      this.recommended = recommended;
      this.trending = trending;
      setTimeout(()=> this.isLoaded = false, 300);
    });
  }
}
