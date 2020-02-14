import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AccountEmailComponent } from './my-account/account-email/account-email.component';
import { AccountPasswordComponent } from './my-account/account-password/account-password.component';
import { AccountPhotoComponent } from './my-account/account-photo/account-photo.component';
import { AccountPhoneComponent } from './my-account/account-phone/account-phone.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    AccountEmailComponent,
    AccountPasswordComponent,
    AccountPhotoComponent,
    AccountPhoneComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    SharedModule
  ]
})
export class MyAccountModule { }
