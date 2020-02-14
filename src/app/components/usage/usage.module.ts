import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageRoutingModule } from './usage-routing.module';
import { UsageComponent } from './usage/usage.component';
import { SharedModule } from 'src/app/shared-module/shared.module';


@NgModule({
  declarations: [
    UsageComponent
  ],
  imports: [
    CommonModule,
    UsageRoutingModule,
    SharedModule
  ]
})
export class UsageModule { }
