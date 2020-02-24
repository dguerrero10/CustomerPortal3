import { Component, OnInit } from '@angular/core';
import { OutagesService } from '../shared/outages.service';
import { Observable } from 'rxjs';
import { Outage } from '../shared/outage.model';
import { MatDialog } from '@angular/material';
import { CurrentOutageModalDetailsComponent } from './current-outage-modal-details/current-outage-modal-details.component';

@Component({
  selector: 'app-current-outages',
  templateUrl: './current-outages.component.html',
  styleUrls: ['./current-outages.component.scss']
})
export class CurrentOutagesComponent implements OnInit {
  outages$: Observable<Outage[]>;

  constructor(private outageService: OutagesService,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.outages$ = this.outageService.getCurrentOutages();
  }

  openCurrentOutageDetailsDialog(): void {
    const dialogRef = this.dialog.open(CurrentOutageModalDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed${result}`);
    });
  }

}
