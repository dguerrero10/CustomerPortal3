import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../../shared-services/notification.service';
import { Notification } from '../../shared-services/notification.model';
import { MatDialog } from '@angular/material';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notifications$: Observable<Notification[]>;

  constructor(public navbarService: NavbarService,
              public notifService: NotificationService,
              public dialog: MatDialog
              ) { }

  ngOnInit() {
    this.navbarService.show();
    this.notifications$ = this.notifService.getNotifications();
  }

  openNotification(): void {
    const dialogRef = this.dialog.open(NotificationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }
}
