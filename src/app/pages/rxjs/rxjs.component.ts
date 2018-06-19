import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {



   this.subscription =  this.returnObserver().pipe(

    retry(2)

   )
   .subscribe(
     num => console.log( 'Sub' + num  ),
     error => console.error( 'Error', error ),
     () => console.log( 'The obs is ended' )
    );


  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObserver(): Observable<any> {

    const obs = new Observable( (observer: Subscriber<any>) => {

      let contador = 1;

        const interval = setInterval( () => {

         contador += 1;

         const salida = {
           valor: contador
         };

         observer.next( salida );

        //  if ( contador === 5 ) {
        //     clearInterval( interval );
        //     observer.complete();
        //  }

        //  if ( contador === 2 ) {
        //     clearInterval( interval );
        //     observer.error('Auxilio!!');
        //  }

        }, 1000 );

     }).pipe(
      map( num => {
        return num.valor;
      }),
      filter( ( num, index) => {
        // console.log('Filter');
        if ( (num % 2) === 1  ) {
           // impar
           return true;
        } else {
          // par
          return false;
        }
      })
    );

     return obs;
  }

}
