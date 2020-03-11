import { Injectable } from '@angular/core';
import { Outage } from './outage.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const date = new Date();

@Injectable({
  providedIn: 'root'
})
export class OutagesService {
  private _outages: Outage[] = [
    new Outage (
      '1',
      '1',
      'Dirty Water',
      '1456 Hope St.',
      'My water is a tinge brown.',
      'Waiting On Utility Response',
      date,
      '../../../../assets/images/avatar/lisa-a.jpg'
    ),
    new Outage (
      Math.random().toString(),
      Math.random().toString(),
      'Other',
      '1232 Peach St.',
      'A fire hydrant burst.',
      'Working On',
      date,
      '../../../../assets/images/avatar/man-glasses.jpg'
    ),
    new Outage (
      Math.random().toString(),
      Math.random().toString(),
      'Water Speed Low',
      '1556 Elm St.',
      'I have very low water pressure!',
      'Being Processed',
      date,
      '../../../../assets/images/avatar/lady-curly-hair.jpg'
    ),
    new Outage (
      Math.random().toString(),
      Math.random().toString(),
      'Planned Outage',
      'El Monte & West Covina',
      'Maintenance',
      'Planned',
      date,
      '../../../../assets/images/My_Utilities.png',
      true
    )
  ];
  constructor() { }

  getOutages(): Observable<Outage[]> {
    return of(this._outages);
  }

  getCurrentOutages(): Observable<Outage[]> {
    return this.getOutages().pipe(
      map((outages: Outage[]) => outages.filter(outage => outage.planned !== true))
    );
  }

  getMyOutages(): Observable<Outage[]> {
    return this.getOutages().pipe(
      map((outages: Outage[]) => outages.filter(outage => outage.uid === '1'))
    );
  }

  getPlannedOutages(): Observable<Outage[]> {
    return this.getOutages().pipe(
      map((outages: Outage[]) => outages.filter(outage => outage.planned === true))
    );
  }

}
