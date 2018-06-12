import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dona-graphics',
  templateUrl: './dona-graphics.component.html',
  styles: []
})
export class DonaGraphicsComponent implements OnInit {

   // Doughnut
   @Input() data2;
   @Input() labels2;
   @Input() chartType2;
   @Input() leyend2;

  constructor() { }

  ngOnInit() {
  }

}
