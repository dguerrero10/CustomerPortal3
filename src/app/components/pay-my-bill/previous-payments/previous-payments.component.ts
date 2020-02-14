import { Component, OnInit } from '@angular/core';
import { PayMyBillService } from '../pay-my-bill-shared/pay-my-bill.service';
import { Bill } from '../pay-my-bill-shared/bill.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-previous-payments',
  templateUrl: './previous-payments.component.html',
  styleUrls: ['./previous-payments.component.scss']
})
export class PreviousPaymentsComponent implements OnInit {
  public innerWidth: any;
  public opened: boolean;

  bills$: Observable<Bill[]>;

  constructor(private payBillService: PayMyBillService) { }

  ngOnInit() {
   this.bills$ = this.payBillService.getBills();

   this.innerWidth = window.innerWidth;
   this.opened = this.innerWidth < 766 ? false : true;
  }
}
