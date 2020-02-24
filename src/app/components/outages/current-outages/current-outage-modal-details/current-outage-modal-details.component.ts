import { Component, OnInit } from '@angular/core';
import { Outage } from '../../shared/outage.model';
import { OutagesService } from '../../shared/outages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-outage-modal-details',
  templateUrl: './current-outage-modal-details.component.html',
  styleUrls: ['./current-outage-modal-details.component.scss']
})
export class CurrentOutageModalDetailsComponent implements OnInit {
  outages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService) { }

  ngOnInit() {
   this.outages$ = this.outageService.getMyOutages();
  }

}
