import { Component, } from '@angular/core';

interface GraficaData {
  labels: string[];
  data: number[];
  titulo: string;
}

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})


export class Grafica1Component {

  data1: GraficaData = {
    labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
    data: [24, 30, 46],
    titulo: 'El pan se come con'
  };

  data2: GraficaData = {
    labels: ['Hombres', 'Mujeres', 'Abuelos'],
    data: [4500, 6000, 10000],
    titulo: 'Entrevistados'
  };

  data3: GraficaData = {
    labels: ['Si', 'No'],
    data: [95, 5],
    titulo: '¿Le dan gases los frijoles?'
  };

  data4: GraficaData = {
    labels: ['No', 'Si'],
    data: [85, 15],
    titulo: '¿Le importa que le den gases?'
  };
}




