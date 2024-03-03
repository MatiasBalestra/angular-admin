import { Component, Input, OnInit, } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

interface GraficaData {
  labels: string[];
  data: number[];
  titulo: string;
}

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() public dataGrafica: GraficaData = {
    labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
    data: [24, 30, 46],
    titulo: 'El pan se come con'
  };


  // Doughnut
  public doughnutChartLabels: string[] = this.dataGrafica.labels;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataGrafica.data,
        /*         backgroundColor: ['#9BD0F5', '#9BD0F5', '#9BD0F5'],
                /*         borderColor: ['#36A2EB', '#36A2EB', '#36A2EB'], */
        /*         hoverBackgroundColor: ['#36A2EB', '#9BD0F5', '#36A2EB'], */
      },
    ],

  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.doughnutChartLabels = this.dataGrafica.labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.dataGrafica.data,
        },
      ],
    };
  }
}


