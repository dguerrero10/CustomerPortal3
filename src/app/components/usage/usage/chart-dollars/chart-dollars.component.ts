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
  @ViewChild('chartDollars', {static: false}) chartDollars;

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
          label: 'Usage (in Dollars)',
          backgroundColor: 'rgba(40, 170, 135, .5)',
          borderColor: 'rgba(40, 170, 135, .7)',
          fill: true,
          data: [50, 70, 80, 63, 74, 67]
        }],
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
