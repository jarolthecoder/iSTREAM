import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  resultBlock: boolean = false; // Display block on search
  constructor() { }

}
