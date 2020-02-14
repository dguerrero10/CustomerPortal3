import { Component, OnInit } from '@angular/core';
import { OutagesService } from '../shared/outages.service';
import { Observable } from 'rxjs';
import { Outage } from '../shared/outage.model';

@Component({
  selector: 'app-current-outages',
  templateUrl: './current-outages.component.html',
  styleUrls: ['./current-outages.component.scss']
})
export class CurrentOutagesComponent implements OnInit {
  outages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService) { }

  ngOnInit() {
    this.outages$ = this.outageService.getOutages();
  }

}
