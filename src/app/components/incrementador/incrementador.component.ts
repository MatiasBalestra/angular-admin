import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {


  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn btn-primary';


  @Output('valor') cambioValor: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.cambioValor.emit(100);
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.cambioValor.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }


  onChange(valor: number) {

    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.cambioValor.emit(this.progreso);
  }
}
