import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayMyBillComponent } from './pay-my-bill/pay-my-bill.component';
import { BillDetailMobileComponent } from './previous-payments/bill-detail-mobile/bill-detail-mobile.component';
import { PreviousPaymentsComponent } from './previous-payments/previous-payments.component';

const routes: Routes = [
  {
    path: '',
    component: PayMyBillComponent
  },
  {
    path: 'previous-payments',
    component: PreviousPaymentsComponent
  },
  {
    path: 'previous-payments/:id',
    component: BillDetailMobileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayMyBillRoutingModule { }
