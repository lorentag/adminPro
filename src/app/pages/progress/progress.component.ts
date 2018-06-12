import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentBlue: number = 50;
  porcentGreen: number = 50;

  constructor() { }

  ngOnInit() {
  }

  // update( event: number ) {
  //   this.porcentBlue = event;
  // }

}
