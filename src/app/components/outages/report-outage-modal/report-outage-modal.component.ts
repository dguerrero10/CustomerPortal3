import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OutageDialogData } from '../outages/outages.component';

interface Outage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report-outage-modal',
  templateUrl: './report-outage-modal.component.html',
  styleUrls: ['./report-outage-modal.component.scss']
})
export class ReportOutageModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReportOutageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OutageDialogData) { }

  outageType: Outage[] = [
    {value: 'dirtyWater', viewValue: 'Dirty Water'},
    {value: 'lowWaterSpeed', viewValue: 'Low Water Speed'},
    {value: 'waterShutOff', viewValue: 'Water Shut Off'},
    {value: 'other', viewValue: 'Other'}
  ];

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
