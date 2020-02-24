import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OutageDetailsComponent } from '../outage-details/outage-details.component';
import { Observable } from 'rxjs';
import { Outage } from '../shared/outage.model';
import { OutagesService } from '../shared/outages.service';

@Component({
  selector: 'app-planned-outage',
  templateUrl: './planned-outage.component.html',
  styleUrls: ['./planned-outage.component.scss']
})
export class PlannedOutageComponent implements OnInit {
  plannedOutages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService,
              public dialog: MatDialog) { }

  ngOnInit() {
  this.plannedOutages$ = this.outageService.getPlannedOutages();
  }

  openOutageDetailsDialog(): void {
    const dialogRef = this.dialog.open(OutageDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed${result}`);
    });
  }

}
