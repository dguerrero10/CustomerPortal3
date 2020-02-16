import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../../shared-services/notification.service';
import { Notification } from '../../shared-services/notification.model';
import { Outage } from '../../outages/shared/outage.model';
import { MatDialog } from '@angular/material';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';
import { OutagesService } from '../../outages/shared/outages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date = new Date();
  imgUrl = '../../../../assets/images/avatar/lisa-a.jpg';

  notifications$: Observable<Notification[]>;
  outages$: Observable<Outage[]>;

  constructor(public navbarService: NavbarService,
              public notifService: NotificationService,
              public outagesService: OutagesService,
              public dialog: MatDialog,
              public router: Router
              ) { }

  ngOnInit() {
    this.navbarService.show();
    this.outages$ = this.outagesService.getOutages();
    this.notifications$ = this.notifService.getNotifications();
    console.log(this.notifications$);
  }

  openNotification(): void {
    const dialogRef = this.dialog.open(NotificationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }
}
