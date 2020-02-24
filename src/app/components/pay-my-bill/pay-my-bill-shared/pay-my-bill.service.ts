import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bill } from './bill.model';

const date = new Date();

@Injectable({
  providedIn: 'root'
})
export class PayMyBillService {
  public _bills: Bill[] = [
    new Bill (
      '1',
      '4236',
      '55',
      date,
      date,
      '0',
      '55',
      '55'
    ),
    new Bill (
      '2',
      '4236',
      '70',
      date,
      date,
      '0',
      '70',
      '70'
    ),
    new Bill (
      '3',
      '4236',
      '84',
      date,
      date,
      '0',
      '84',
      '84'
    ),
  ];

  constructor() { }

  getBills(): Observable<Bill[]> {
    return of(this._bills);
  }

  requestExtension(dueDate: Date) {
    console.log(dueDate);
    return this.getBills().pipe(
      map((bills: Bill[]) => bills.find(bill => bill.dueDate === dueDate))
    );
  }

  getBill(id: string) {
    return this.getBills().pipe(
      map((bills: Bill[]) => bills.find(bill => bill.id === id))
    );
  }

  getCurrentBill() {
    return this.getBills().pipe(
      map((bills: Bill[]) => bills.find(bill => bill.id === '3'))
    );
  }
}
