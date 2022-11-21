import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('inputValue') inputValue!:ElementRef<HTMLInputElement>;
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  searchTitle: string = '';
  debouncer: Subject<string> = new Subject(); // Special type of observable

  constructor() { this.onSearch.emit(this.searchTitle); }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(200))
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  search() {
    const value = this.inputValue.nativeElement.value;
    if(value.length === 0) return
    this.onSearch.emit(this.searchTitle);
  }

  keyPressed() {
    this.debouncer.next(this.searchTitle);
  }

}
