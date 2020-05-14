import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../shared/google-maps.service';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.scss']
})
export class AgmMapComponent implements OnInit {
  lat: number;
  lng: number;
  
  constructor() { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
