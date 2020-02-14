import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.scss']
})
export class AgmMapComponent implements OnInit {
  lat: number;
  long: number;

  constructor() { }

  ngOnInit() {
    this.lat = 34.099201;
    this.long = -118.107231;
  }

}
