import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PayMyBillService } from '../../pay-my-bill-shared/pay-my-bill.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Bill } from '../../pay-my-bill-shared/bill.model';
import { MatSnackBar } from '@angular/material';
import { AutoPayEnrollComponent } from './auto-pay-enroll/auto-pay-enroll.component';
import { RequestExtensionComponent } from './request-extension/request-extension.component';
import { NavbarService } from 'src/app/components/shared-services/navbar.service';
import { PaperlessBillingEnrollComponent } from './paperless-billing-enroll/paperless-billing-enroll.component';

export interface ExtensionDialogData {
  extensionDate: Date;
}

export interface PaperlessBillingDialogData {
  enrolledInPaperless: boolean;
}

export interface AutoBillingDialogData {
  enrolledInAutoPay: boolean;
}

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  bill$: Observable<Bill>;
  extensionDate: Date;
  message: string;
  enrolledInPaperless: false;
  enrolledInAutoPay: false;

  action = 'Dismiss';

  payBillFormControl: FormGroup;

  constructor(private payBillService: PayMyBillService,
              private fb: FormBuilder,
              public navbarService: NavbarService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.navbarService.show();
    this.bill$ = this.payBillService.getCurrentBill();
    this.createForm();
  }

  createForm() {
    this.payBillFormControl = this.fb.group({
      nameOnCard: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      CSV: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'nameOnCard':
        if (this.payBillFormControl.get('nameOnCard').hasError('required')) {
          return 'This field is required.';
        }
        break;
      case 'expirationDate':
        if (this.payBillFormControl.get('expirationDate').hasError('required')) {
          return 'This field is required.';
        }
        break;
      case 'cardNumber':
        if (this.payBillFormControl.get('expirationDate').hasError('required')) {
          return 'This field is required.';
        }
        break;
      case 'CSV':
        if (this.payBillFormControl.get('CSV').hasError('required')) {
          return 'This field is required.';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit() {
    if (this.payBillFormControl.invalid) {
      return;
    }
    this.payBillFormControl.reset();
    this._snackBar.open('Thank you for paying your bill.', 'Dismiss', {
      duration: 4000
    });
  }

  // Request extension dialog
  requestExtension(): void {
    const dialogRef = this.dialog.open(RequestExtensionComponent, {
      width: '350px',
      data: { extensionDate: this.extensionDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.extensionDate = result;
      this.message = `Your new Due Date is ${this.extensionDate}`;
      this.payBillService.requestExtension(this.extensionDate);
      this.openSnackBar(this.message, this.action);
    });
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  // Enroll in auto pay dialog
  enrollInAutoPay(): void {
    const dialogRef = this.dialog.open(AutoPayEnrollComponent, {
      data: {enrolled: this.enrolledInAutoPay}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      this.enrolledInAutoPay = result;
    });
  }

// Enroll in paperless dialog 
// Set enrolledInPaperless to true on accepting 
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
