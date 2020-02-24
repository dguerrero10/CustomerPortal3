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


@NgModule({
  declarations: [
    OutagesComponent,
    AgmMapComponent,
    MyOutagesComponent,
    PlannedOutageComponent,
    ReportOutageModalComponent,
    OutageDetailsComponent,
    CurrentOutageModalDetailsComponent
  ],
  imports: [
    CommonModule,
    OutagesRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMiEZam-6wap7mVNhP4WctIxbU5IyVH-I'
    }),
  ]
})
export class OutagesModule { }
