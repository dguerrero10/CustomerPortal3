import { Component, OnInit, ElementRef } from '@angular/core';
import { PayMyBillService } from '../pay-my-bill-shared/pay-my-bill.service';
import { Bill } from '../pay-my-bill-shared/bill.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavbarService } from '../../shared-services/navbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previous-payments',
  templateUrl: './previous-payments.component.html',
  styleUrls: ['./previous-payments.component.scss']
})
export class PreviousPaymentsComponent implements OnInit {
  public innerWidth: any;
  bills$: Observable<Bill[]>;
  id: string;

  constructor(private payBillService: PayMyBillService,
              public navbarService: NavbarService,
              private route: ActivatedRoute,
              private el: ElementRef) { }

  ngOnInit() {
   this.navbarService.show();
   this.innerWidth = window.innerWidth;
   const keyFrame = this.el.nativeElement.querySelector('.fadeInLeft');

   if (this.innerWidth <= 500) {
     keyFrame.classList.remove('fadeInLeft');
   }

   this.bills$ = this.route.paramMap.pipe(
     switchMap(params => {
      this.id = params.get('id');
      return this.payBillService.getBills();
     })
   );
  }
}
