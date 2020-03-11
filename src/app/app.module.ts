import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { PayMyBillModule } from './components/pay-my-bill/pay-my-bill.module';
import { HomeModule } from './components/home/home.module';
import { UsageModule } from './components/usage/usage.module';
import { OutagesModule } from './components/outages/outages.module';
import { MyAccountModule } from './components/my-account/my-account.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from './components/shared-services/notification.service';
import { PayMyBillService } from './components/pay-my-bill/pay-my-bill-shared/pay-my-bill.service';
import { OutagesService } from './components/outages/shared/outages.service';
import { AccountEmailComponent } from './components/my-account/my-account/account-email/account-email.component';
import { AccountPasswordComponent } from './components/my-account/my-account/account-password/account-password.component';
import { AccountPhoneComponent } from './components/my-account/my-account/account-phone/account-phone.component';
import { AccountPhotoComponent } from './components/my-account/my-account/account-photo/account-photo.component';
import { NavbarService } from './components/shared-services/navbar.service';
import { ReportOutageModalComponent } from './components/outages/report-outage-modal/report-outage-modal.component';
import { OutageDetailsComponent } from './components/outages/outage-details/outage-details.component';
import { NotificationComponent } from './components/home/notification/notification.component';
import { AutoPayEnrollComponent } from './components/pay-my-bill/pay-my-bill/pay/auto-pay-enroll/auto-pay-enroll.component';
import { RequestExtensionComponent } from './components/pay-my-bill/pay-my-bill/pay/request-extension/request-extension.component';
import { CurrentOutageModalDetailsComponent }
from './components/outages/current-outages/current-outage-modal-details/current-outage-modal-details.component';
import { PaperlessBillingEnrollComponent } from './components/pay-my-bill/pay-my-bill/pay/paperless-billing-enroll/paperless-billing-enroll.component';
import { ServiceRequestModalComponent } from './components/outages/outages/service-request-modal/service-request-modal.component';
import { MobileOutageMenuComponent } from './components/outages/mobile-outage-menu/mobile-outage-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    PayMyBillModule,
    UsageModule,
    OutagesModule,
    MyAccountModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ],
  providers: [
   { provide: LocationStrategy, useClass: HashLocationStrategy },
    NavbarService,
    NotificationService,
    PayMyBillService,
    OutagesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
   NotificationComponent,
   CurrentOutageModalDetailsComponent,
   OutageDetailsComponent,
   MobileOutageMenuComponent,
   RequestExtensionComponent,
   AutoPayEnrollComponent,
   PaperlessBillingEnrollComponent,
   ServiceRequestModalComponent,
   ReportOutageModalComponent,
   AccountEmailComponent,
   AccountPasswordComponent,
   AccountPhoneComponent,
   AccountPhotoComponent
  ]
})
export class AppModule { }
