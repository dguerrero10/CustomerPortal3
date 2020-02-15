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
  @ViewChild('chartCCF', {static: false}) chartCCF;

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
          label: 'Usage (in CCF)',
          backgroundColor: 'rgba(252, 226, 5, .5)',
          borderColor: 'rgba(252, 226, 5, .7)',
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
