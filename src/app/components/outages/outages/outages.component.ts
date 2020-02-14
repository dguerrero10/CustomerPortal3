import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ReportOutageModalComponent } from '../report-outage-modal/report-outage-modal.component';

export interface OutageDialogData {
  outage: string;
}

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.scss']
})
export class OutagesComponent implements OnInit {

  outage: string;

  constructor(public navbarService: NavbarService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.navbarService.show();
  }

  openReportOutageDialog(): void {
    const dialogRef = this.dialog.open(ReportOutageModalComponent, {
      width: '350px',
      data: {outage: this.outage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.outage = result;
    });
  }
}
