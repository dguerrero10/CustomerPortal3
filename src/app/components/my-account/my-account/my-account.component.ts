import { Component, OnInit, Inject } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AccountEmailComponent } from './account-email/account-email.component';
import { AccountPhoneComponent } from './account-phone/account-phone.component';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { MatSnackBar } from '@angular/material';

export interface EmailDialogData {
  email: string;
}
export interface PhoneDialogData {
  phone: string;
}
export interface PasswordDialogData {
  password: string;
}

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  password = 'LisaForEver';
  phone = '(626) 123-4567';
  email = 'lisaA@gmail.com';

  action = 'Dismiss';
  message: string;

  constructor(public navbarService: NavbarService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.navbarService.show();
  }

  openEmailDialog(): void {
    const dialogRef = this.dialog.open(AccountEmailComponent, {
      width: '350px',
      data: {email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
      this.message = `Email updated to ${this.email}`;
      this.openSnackBar(this.message, this.action);
    });
  }
  openPhoneDialog(): void {
    const dialogRef = this.dialog.open(AccountPhoneComponent, {
      width: '350px',
      data: {phone: this.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.phone = result;
      this.message = `Phone updated to ${this.phone}`;
      this.openSnackBar(this.message, this.action);
    });
  }

  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(AccountPasswordComponent, {
      width: '350px',
      data: {password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
      this.message = `Password updated to ${this.password}`;
      this.openSnackBar(this.message, this.action);
    });
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
