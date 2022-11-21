import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    
  }

  updateDisplay() {
    this.shared.resultBlock = false;
  }
}
