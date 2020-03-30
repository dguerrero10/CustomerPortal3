import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AccountEmailComponent } from './account-email/account-email.component';
import { AccountPhoneComponent } from './account-phone/account-phone.component';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { MatSnackBar } from '@angular/material';
import { AccountPhotoComponent } from './account-photo/account-photo.component';
import { AutoPayEnrollComponent } from '../../pay-my-bill/pay-my-bill/pay/auto-pay-enroll/auto-pay-enroll.component'
import { PaperlessBillingEnrollComponent } from '../../pay-my-bill/pay-my-bill/pay/paperless-billing-enroll/paperless-billing-enroll.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  password = 'LisaForEver';
  phone = '(626) 123-4567';
  email = 'lisaA@gmail.com';
  photo = '../../../../assets/images/avatar/lisa-a.jpg';
  enrolledInAutoPay: false;
  enrolledInPaperless: false;

  constructor(public navbarService: NavbarService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.navbarService.show();
  }

  openEmailDialog(): void {
    const dialogRef = this.dialog.open(AccountEmailComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result');
    });
  }
  openPhoneDialog(): void {
    const dialogRef = this.dialog.open(AccountPhoneComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(AccountPasswordComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openPhotoDialog(): void {
    const dialogRef = this.dialog.open(AccountPhotoComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  enrollInAutoPay(): void {
    const dialogRef = this.dialog.open(AutoPayEnrollComponent, {
      data: {enrolled: this.enrolledInAutoPay}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      this.enrolledInAutoPay = result;
    });
  }

  enrollInPaperless(): void {
    const dialogRef = this.dialog.open(PaperlessBillingEnrollComponent, {
      data: {enrolled: this.enrolledInPaperless}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      this.enrolledInPaperless = result;
    });
  }

}
