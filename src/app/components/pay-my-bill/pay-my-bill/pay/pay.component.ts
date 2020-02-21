import { Component, OnInit } from '@angular/core';
import { PayMyBillService } from '../../pay-my-bill-shared/pay-my-bill.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Bill } from '../../pay-my-bill-shared/bill.model';
import { AutoPayEnrollComponent } from './auto-pay-enroll/auto-pay-enroll.component';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  bill$: Observable<Bill>;

  constructor(private payBillService: PayMyBillService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.bill$ = this.payBillService.getCurrentBill();
  }

  enrollInAutoPay(): void {
    const dialogRef = this.dialog.open(AutoPayEnrollComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }
}
