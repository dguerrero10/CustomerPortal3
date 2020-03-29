import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-ccf',
  templateUrl: './chart-ccf.component.html',
  styleUrls: ['./chart-ccf.component.scss']
})
export class ChartCcfComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('chartCCF') chartCCF;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = this.chartCCF.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = 500;
    const chartCCF = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [{
          label: 'CCF',
          backgroundColor: 'rgba(211, 41, 84, .5)',
          borderColor: 'rgba(211, 41, 84, .7)',
          fill: true,
          data: [.21, .12, .23, .22, .15, .11]
        }],
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
      },
      options: {
        responsive: true,
        scales: {
          ticks: {
            suggestedMin: 30
          }
        }
      }
    });
  }
}

