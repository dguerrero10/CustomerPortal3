import { Injectable } from '@angular/core';
import { ServiceRequest } from '../shared/service-requests.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const date = new Date();

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {
  private _serviceRequests: ServiceRequest[] = [
    new ServiceRequest (
    '1',
    '1',
    'GH123232',
    'Service Investigation',
    'Being processed',
    date,
    '../../../../../../assets/images/avatar/lisa-a.jpg',
    '',
    'High Bill',
    )
  ];

  constructor() { }

  getServiceRequests(): Observable<ServiceRequest[]> {
    return of(this._serviceRequests);
  }

  getMyServiceRequests(): Observable<ServiceRequest[]> {
    return this.getServiceRequests().pipe(
      map((requests: ServiceRequest[]) => requests.filter(request => request.uid === '1'))
    );
  }
}
