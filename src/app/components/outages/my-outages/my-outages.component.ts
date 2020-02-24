import { Component, OnInit } from '@angular/core';
import { OutagesService } from '../shared/outages.service';
import { Outage } from '../shared/outage.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-outages',
  templateUrl: './my-outages.component.html',
  styleUrls: ['./my-outages.component.scss']
})
export class MyOutagesComponent implements OnInit {
  myOutages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService) { }

  ngOnInit() {
    this.myOutages$ = this.outageService.getMyOutages();
  }

}
