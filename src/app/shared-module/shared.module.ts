import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material/material.module';
import { ChartCcfComponent } from '../components/usage/usage/chart-ccf/chart-ccf.component';
import { ChartDollarsComponent } from '../components/usage/usage/chart-dollars/chart-dollars.component';
import { ChartGallonsComponent } from '../components/usage/usage/chart-gallons/chart-gallons.component';
import { LoginToolbarComponent } from '../components/login/login-toolbar/login-toolbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CurrentOutagesComponent } from '../components/outages/current-outages/current-outages.component';

@NgModule({
 imports: [
    CommonModule,
    ChartsModule,
    MaterialModule,
    NgxSpinnerModule
    ],
 declarations: [
    LoginToolbarComponent,
    ChartCcfComponent,
    ChartDollarsComponent,
    ChartGallonsComponent,
    CurrentOutagesComponent,
    ],
 exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MaterialModule,
    NgxSpinnerModule,
    LoginToolbarComponent,
    ChartCcfComponent,
    ChartDollarsComponent,
    ChartGallonsComponent,
    CurrentOutagesComponent,
    ]
})
export class SharedModule {}
