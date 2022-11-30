import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title  : string = 'EntertainmentApp';
  isGuest: boolean = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('Is Guest')) {
      this.isGuest = true;
    }
  }
}
