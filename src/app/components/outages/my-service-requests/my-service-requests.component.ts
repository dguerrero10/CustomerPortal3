import { Component, OnInit } from '@angular/core';
import { ServiceRequestsService } from './shared/service-requests.service';
import { ServiceRequest } from './shared/service-requests.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-service-requests',
  templateUrl: './my-service-requests.component.html',
  styleUrls: ['./my-service-requests.component.scss']
})
export class MyServiceRequestsComponent implements OnInit {
  myServiceRequests$: Observable<ServiceRequest[]>;

  constructor(private serviceRequests: ServiceRequestsService) { }

  ngOnInit() {
    this.myServiceRequests$ = this.serviceRequests.getMyServiceRequests();
  }

}
