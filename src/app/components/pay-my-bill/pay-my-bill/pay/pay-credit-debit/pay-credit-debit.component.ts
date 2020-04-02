import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutoBillingDialogData } from '../pay.component';
import { AutoPayEnrollComponent } from '../auto-pay-enroll/auto-pay-enroll.component';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-pay-credit-debit',
  templateUrl: './pay-credit-debit.component.html',
  styleUrls: ['./pay-credit-debit.component.scss']
})
export class PayCreditDebitComponent implements OnInit {
  date = new Date();
  valid: boolean;
  payBillCreditDebitFormControl: FormGroup;

  constructor(private fb: FormBuilder,
              private _scrollToService: ScrollToService,
              public dialogRef: MatDialogRef<AutoPayEnrollComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AutoBillingDialogData
             ) { }

  ngOnInit(): void {
    this.createFormCreditDebit();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  config: ScrollToConfigOptions = {
    target: 'invalid-form'
  };

  createFormCreditDebit() {
    this.payBillCreditDebitFormControl = this.fb.group({
      nameOnCard: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      CSV: ['', [Validators.required]],
      signature: ['', [Validators.required]]
    });
  }

  getErrors(el) {
    switch (el) {
      case 'nameOnCard':
        if (this.payBillCreditDebitFormControl.get('nameOnCard').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'expirationDate':
        if (this.payBillCreditDebitFormControl.get('expirationDate').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'cardNumber':
        if (this.payBillCreditDebitFormControl.get('cardNumber').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'CSV':
        if (this.payBillCreditDebitFormControl.get('CSV').hasError('required')) {
          return 'This field is required.'
        }
        break;
      case 'signature':
        if (this.payBillCreditDebitFormControl.get('signature').hasError('required')) {
          return 'This field is required.'
        }
        break;
    }
  }

  onSubmit() {
    if (this.payBillCreditDebitFormControl.invalid) {
      this._scrollToService.scrollTo(this.config);
      return;
    }
    this.dialogRef.close();
    this.data.enrolledInAutoPay = true;
  }

}
