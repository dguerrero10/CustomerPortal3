import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-gallons',
  templateUrl: './chart-gallons.component.html',
  styleUrls: ['./chart-gallons.component.scss']
})
export class ChartGallonsComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('chartGallons') chartGallons;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = this.chartGallons.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.height = 500;
    const chartGallons = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [{
          label: 'Gallons (in Hundreds)',
          backgroundColor: 'rgba(0, 128, 255, .5)',
          borderColor: 'rgba(0, 128, 255, .7)',
          fill: true,
          data: [300, 275, 223, 300, 278, 254]
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
