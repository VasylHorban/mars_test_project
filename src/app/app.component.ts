import { Component } from '@angular/core';
import { fall } from './animations/fall';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    fall
  ]
})
export class AppComponent {

  constructor() {}


}
