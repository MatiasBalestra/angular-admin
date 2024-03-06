import { Component, OnInit } from '@angular/core';
import { Observable, retry, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => valor == 3 ? console.log('toco 3') : console.log('subs', valor),
      error => console.warn('Error', error),
      () => console.info('Obs terminado')
    ); */

    this.retornaIntevalo().subscribe(console.log);
  }



  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i);


        if (i === 2) {
          observer.error('i llego al valor de 2');
        }

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }


      }
        , 1000)

    });

    return obs$;
  }


  retornaIntevalo(): Observable<string> {
    return interval(1000).pipe(
      take(4),
      map(i => `${i + 1}   ${i + 2}`)
    )
  }


  ngOnInit(): void {
  }

}
