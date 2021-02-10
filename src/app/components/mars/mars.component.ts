import { Component, OnInit } from '@angular/core';
import { fall } from 'src/app/animations/fall';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss'],
  animations : [
    fall
  ]
})
export class MarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
