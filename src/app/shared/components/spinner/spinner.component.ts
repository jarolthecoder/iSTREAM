import { Component} from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{

  constructor(public shared: SharedService) { }

}
