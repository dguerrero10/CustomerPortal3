import { Injectable } from '@angular/core';
import { Notification } from './notification.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const date = new Date();

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  public _notifications: Notification[] = [
    new Notification (
      '1',
      'Payment Made',
      'Your payment of 87$ was processed and your account is up to date.',
      date,
      'check_circle'
    ),
    new Notification (
      '2',
      'Planned Outage',
      'There is a planned outage on March 5th. Please view the Outage section for more details.',
      date,
      'build'
    ),
    new Notification (
      '3',
      'Unplanned Outage',
      'Someone reported an outage. Please view the Outage section for more details.',
      date,
      'pin_drop'
    ),
    new Notification (
      '4',
      'Usage Summary',
      'Your monthly usage is down by 20% since last month. Great job!',
      date,
      'insert_chart'
    ),
    new Notification (
      '5',
      'Upcoming Payment',
      'Your utility bill is due on March 1st. Pay it right now in the Pay My Bill section.',
      date,
      'alarm'
    ),
    new Notification (
      '6',
      'Payment Made',
      'Your payment of 90$ was processed and your account is up to date.',
      date,
      'check_circle'
    ),
    new Notification (
      '7',
      'Payment Made',
      'Your payment of 83$ was processed and your account is up to date.',
      date,
      'check_circle'
    ),
    new Notification (
      '8',
      'Payment Made',
      'Your payment of 65$ was processed and your account is up to date.',
      date,
      'check_circle'
    ),
  ];
  constructor() { }

  getNotifications(): Observable<Notification[]> {
    return of(this._notifications);
  }

  getNotification() {
    return this.getNotifications().pipe(
      map((notifications: Notification[]) => notifications.find(notification => notification.id === '1'))
    );
  }

}
