import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared-services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AccountEmailComponent } from './account-email/account-email.component';
import { AccountPhoneComponent } from './account-phone/account-phone.component';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { MatSnackBar } from '@angular/material';
import { AccountPhotoComponent } from './account-photo/account-photo.component';

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
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = 'Your email has been updated.';
      this.openSnackBar(this.message, this.action);
    });
  }
  openPhoneDialog(): void {
    const dialogRef = this.dialog.open(AccountPhoneComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = 'Your Phone Number has been updated.';
      this.openSnackBar(this.message, this.action);
    });
  }

  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(AccountPasswordComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = 'Your Password has been updated.';
      this.openSnackBar(this.message, this.action);
    });
  }

  openPhotoDialog(): void {
    const dialogRef = this.dialog.open(AccountPhotoComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = 'Your Profile Photo has been updated.';
      this.openSnackBar(this.message, this.action);
    });
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
