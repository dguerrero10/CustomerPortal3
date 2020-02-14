import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayMyBillRoutingModule } from './pay-my-bill-routing.module';
import { PayMyBillComponent } from './pay-my-bill/pay-my-bill.component';
import { PayComponent } from './pay-my-bill/pay/pay.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PreviousPaymentsComponent } from './previous-payments/previous-payments.component';

@NgModule({
  declarations: [
    PayMyBillComponent,
    PayComponent,
    PreviousPaymentsComponent
  ],
  imports: [
    CommonModule,
    PayMyBillRoutingModule,
    SharedModule
  ]
})
export class PayMyBillModule { }
