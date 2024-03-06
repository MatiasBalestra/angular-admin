import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {


    this.tituloSubs$ = this.getArgumentos().subscribe((({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${this.titulo}`;
    })
    );;
  }


  getArgumentos() {

    return this.router.events.
      pipe(
        filter(event => event instanceof ActivationEnd && event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      );
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


}
