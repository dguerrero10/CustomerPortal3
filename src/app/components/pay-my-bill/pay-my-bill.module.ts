import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayMyBillRoutingModule } from './pay-my-bill-routing.module';
import { PayMyBillComponent } from './pay-my-bill/pay-my-bill.component';
import { PayComponent } from './pay-my-bill/pay/pay.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PreviousPaymentsComponent } from './previous-payments/previous-payments.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillDetailMobileComponent } from './previous-payments/bill-detail-mobile/bill-detail-mobile.component';
import { PayBillNavComponent } from './pay-bill-nav/pay-bill-nav.component';
import { AutoPayEnrollComponent } from './pay-my-bill/pay/auto-pay-enroll/auto-pay-enroll.component';
import { PayDetailMobileComponent } from './pay-my-bill/pay/pay-detail-mobile/pay-detail-mobile.component';
import { RequestExtensionComponent } from './pay-my-bill/pay/request-extension/request-extension.component';
import { PaperlessBillingEnrollComponent } from './pay-my-bill/pay/paperless-billing-enroll/paperless-billing-enroll.component';
import { PayCreditDebitComponent } from './pay-my-bill/pay/pay-credit-debit/pay-credit-debit.component';
import { PayBankInstitutionComponent } from './pay-my-bill/pay/pay-bank-institution/pay-bank-institution.component';

@NgModule({
  declarations: [
    PayMyBillComponent,
    PayComponent,
    PreviousPaymentsComponent,
    BillDetailComponent,
    BillDetailMobileComponent,
    PayBillNavComponent,
    AutoPayEnrollComponent,
    PayDetailMobileComponent,
    RequestExtensionComponent,
    PaperlessBillingEnrollComponent,
    PayCreditDebitComponent,
    PayBankInstitutionComponent
  ],
  imports: [
    CommonModule,
    PayMyBillRoutingModule,
    SharedModule
  ]
})
export class PayMyBillModule { }
