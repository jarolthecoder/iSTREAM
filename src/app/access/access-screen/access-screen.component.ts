import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-screen',
  templateUrl: './access-screen.component.html',
  styleUrls: ['./access-screen.component.css']
})
export class AccessScreenComponent implements OnInit {
  @Input() isGuest!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  markGuest() {
    localStorage.setItem('Is Guest', 'true');
    this.isGuest = true;
    window.location.reload()
  }

}
