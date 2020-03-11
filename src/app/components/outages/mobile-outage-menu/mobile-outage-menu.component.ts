import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatDialog } from '@angular/material';
import { ReportOutageModalComponent } from '../report-outage-modal/report-outage-modal.component';
import { ServiceRequestModalComponent } from '../outages/service-request-modal/service-request-modal.component';

export interface OutageDialogData {
  outage: string;
}

export interface ServiceRequestDialogData {
  serviceRequest: string;
}

@Component({
  selector: 'app-mobile-outage-menu',
  templateUrl: './mobile-outage-menu.component.html',
  styleUrls: ['./mobile-outage-menu.component.scss']
})
export class MobileOutageMenuComponent implements OnInit {
  
  outage: string;
  serviceRequest: string;

  constructor(public dialog: MatDialog,
              private mobileOutageMenuRef: MatBottomSheetRef<MobileOutageMenuComponent>) { }

  ngOnInit() {
  }

  dismissMenu(): void {
    this.mobileOutageMenuRef.dismiss();
  }

  openLink(event: MouseEvent): void {
    this.mobileOutageMenuRef.dismiss();
    event.preventDefault();
  }

  openReportOutageDialog(): void {
    const dialogRef = this.dialog.open(ReportOutageModalComponent, {
      width: '500px',
      data: {outage: this.outage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.outage = result;
    });
  }
  openServiceRequestDialog(): void {
    const dialogRef = this.dialog.open(ServiceRequestModalComponent, {
      data: {serviceRequest: this.serviceRequest}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.serviceRequest = result;
    });
  }

}
