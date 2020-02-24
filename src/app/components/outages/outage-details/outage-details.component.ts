import { Component, OnInit } from '@angular/core';
import { OutagesService } from '../shared/outages.service';
import { Observable } from 'rxjs';
import { Outage } from '../shared/outage.model';

@Component({
  selector: 'app-outage-details',
  templateUrl: './outage-details.component.html',
  styleUrls: ['./outage-details.component.scss']
})
export class OutageDetailsComponent implements OnInit {
  plannedOutages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService) { }

  ngOnInit() {

  }

}
