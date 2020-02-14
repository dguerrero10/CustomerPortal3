import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../shared-services/notification.model';
import { NotificationService } from '../../shared-services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notification$: Observable<Notification>;

  constructor(public notifService: NotificationService) { }

  ngOnInit() {
    this.notification$ = this.notifService.getNotification();
  }
}
