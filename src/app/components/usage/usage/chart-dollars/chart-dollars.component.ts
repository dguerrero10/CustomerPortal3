import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-dollars',
  templateUrl: './chart-dollars.component.html',
  styleUrls: ['./chart-dollars.component.scss']
})
export class ChartDollarsComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('chartDollars') chartDollars;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = this.chartDollars.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = 500;
    const chartDollars = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Dollars',
          backgroundColor: 'rgba(40, 170, 135, .5)',
          borderColor: 'rgba(40, 170, 135, .7)',
          fill: true,
          data: [50, 70, 80, 63, 74, 67]
        },
        {
          label: 'Gallons (in Thousands)',
          backgroundColor: 'rgba(0, 128, 255, .5)',
          borderColor: 'rgba(0, 128, 255, .7)',
          fill: true,
          data: [12.2, 11.4, 11.3, 13.6, 13.7, 13.5]
        },
        {
          label: 'CCF',
          backgroundColor: 'rgba(211, 41, 84, .5)',
          borderColor: 'rgba(211, 41, 84, .7)',
          fill: true,
          data: [1.8, 2.1, 1.5, 1.22, 2.15, 1.11]
        }
      ],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
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
