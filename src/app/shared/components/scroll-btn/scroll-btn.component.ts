import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-btn',
  templateUrl: './scroll-btn.component.html',
  styleUrls: ['./scroll-btn.component.css']
})
export class ScrollBtnComponent implements OnInit {
  loaded: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(document.readyState === 'complete' || document.readyState === "interactive") {
      setTimeout(()=> this.loaded = true, 300);
    }
  }

}
