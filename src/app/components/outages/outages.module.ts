import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { OutagesRoutingModule } from './outages-routing.module';
import { OutagesComponent } from './outages/outages.component';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { MyOutagesComponent } from './my-outages/my-outages.component';
import { PlannedOutageComponent } from './planned-outage/planned-outage.component';
import { ReportOutageModalComponent } from './report-outage-modal/report-outage-modal.component';
import { OutageDetailsComponent } from './outage-details/outage-details.component';
import { CurrentOutageModalDetailsComponent } from './current-outages/current-outage-modal-details/current-outage-modal-details.component';
import { ServiceRequestModalComponent } from './outages/service-request-modal/service-request-modal.component';
import { StartServiceFormComponent } from './outages/service-request-modal/start-service-form/start-service-form.component';
import { StopServiceFormComponent } from './outages/service-request-modal/stop-service-form/stop-service-form.component';
import { ServiceInvestigationFormComponent } from './outages/service-request-modal/service-investigation-form/service-investigation-form.component';
import { AccountInquiriesFormComponent } from './outages/service-request-modal/account-inquiries-form/account-inquiries-form.component';
import { MyServiceRequestsComponent } from './my-service-requests/my-service-requests.component';
import { MobileOutageMenuComponent } from './mobile-outage-menu/mobile-outage-menu.component';

@NgModule({
  declarations: [
    OutagesComponent,
    AgmMapComponent,
    MyOutagesComponent,
    PlannedOutageComponent,
    ReportOutageModalComponent,
    OutageDetailsComponent,
    CurrentOutageModalDetailsComponent,
    ServiceRequestModalComponent,
    StartServiceFormComponent,
    StopServiceFormComponent,
    ServiceInvestigationFormComponent,
    AccountInquiriesFormComponent,
    MyServiceRequestsComponent,
    MobileOutageMenuComponent
  ],
  imports: [
    CommonModule,
    OutagesRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMiEZam-6wap7mVNhP4WctIxbU5IyVH-I',
      libraries: ['geometry', 'places']
    }),
  ]
})
export class OutagesModule { }
