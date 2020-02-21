import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/components/shared-services/navbar.service';
import { Bill } from '../../pay-my-bill-shared/bill.model';
import { PayMyBillService } from '../../pay-my-bill-shared/pay-my-bill.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bill-detail-mobile',
  templateUrl: './bill-detail-mobile.component.html',
  styleUrls: ['./bill-detail-mobile.component.scss']
})
export class BillDetailMobileComponent implements OnInit {
  bill$: Observable<Bill>;

  constructor(public navbarService: NavbarService,
              private billService: PayMyBillService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.navbarService.show();
    this.bill$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.billService.getBill(params.get('id')))
    );
  }

}
