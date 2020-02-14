import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OutageDetailsComponent } from '../outage-details/outage-details.component';

@Component({
  selector: 'app-planned-outage',
  templateUrl: './planned-outage.component.html',
  styleUrls: ['./planned-outage.component.scss']
})
export class PlannedOutageComponent implements OnInit {
  date =  new Date();
  imgUrl = '../../../../assets/images/My_Utilities.png';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openOutageDetailsDialog(): void {
    const dialogRef = this.dialog.open(OutageDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed${result}`);
    });
  }

}
