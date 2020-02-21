import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../../../pay-my-bill-shared/bill.model';
import { PayMyBillService } from '../../../pay-my-bill-shared/pay-my-bill.service';

@Component({
  selector: 'app-pay-detail-mobile',
  templateUrl: './pay-detail-mobile.component.html',
  styleUrls: ['./pay-detail-mobile.component.scss']
})
export class PayDetailMobileComponent implements OnInit {
  public show = false;
  bill$: Observable<Bill>;

  constructor(private payBillService: PayMyBillService) { }

  ngOnInit() {
    this.bill$ = this.payBillService.getCurrentBill();
  }

  toggle() {
    this.show = !this.show;
  }
}
