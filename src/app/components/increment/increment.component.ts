import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input() leyend: string = 'Leyenda';
  @Input() porcent: number = 50;

  @ViewChild('txtporcent') txtporcent: ElementRef;

  @Output() ValueChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange ( $event: number ) {
    // console.log( $event );

    // let elemHTML: any = document.getElementsByName('porcent')[0];
    // console.log( this.txtporcent );

    if ( $event >= 100 ) {
      this.porcent = 100;
    } else if ( $event <= 0 ) {
      this.porcent = 0;
    } else {
      this.porcent = $event;
    }

    // elemHTML.value = Number( this.porcent );
    this.txtporcent.nativeElement.value = this.porcent;
    this.ValueChange.emit( this.porcent );
  }

  changePercent(value: number) {

    if ( this.porcent >= 100 && value > 0) {
      this.porcent = 100;
       return;
    }

    if ( this.porcent <= 0 && value < 0) {
      this.porcent = 0;
      return;
   }

    this.porcent = this.porcent + value;
    this.ValueChange.emit( this.porcent );
    this.txtporcent.nativeElement.focus();
  }

}
