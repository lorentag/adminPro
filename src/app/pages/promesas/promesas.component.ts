import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
       () => console.log('Termino!')
    )
    .catch(
      error => { console.error('Error en la promesa', error); }
    );

  }

  ngOnInit() {
  }

  contarTres() {
    const promise = new Promise( (resolve, reject) => {

      let contador = 0;

     const interval = setInterval( () => {

      contador += 1;
      console.log( contador );
      if ( contador === 3 ) {
         resolve();
         clearInterval( interval );
      }

     }, 1000 );

    });

    return promise;

  }


}
